# Landing page — Agence IA

Next.js (App Router) · Tailwind v4 · Framer Motion. Voir le contenu éditorial dans [lib/content.ts](lib/content.ts) et la configuration dans [lib/site.ts](lib/site.ts).

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Déploiement Vercel

Le repo est connecté à Vercel : chaque push sur `main` redéploie automatiquement.

## Déploiement Docker (VPS — app.srv1472299.hstgr.cloud)

Le projet inclut un `Dockerfile` (build multi-stage, sortie Next.js `standalone`) et un `docker-compose.yml` prévus pour tourner **derrière le reverse proxy déjà en place sur le VPS** — le conteneur n'expose rien sur 80/443, seulement le port interne `3000`.

### 1. Préparer l'environnement

Sur le VPS, dans le dossier du projet :

```bash
cp .env.local.example .env
# éditer .env : renseigner NEXT_PUBLIC_CALCOM_LINK, RESEND_API_KEY,
# NEXT_PUBLIC_SITE_URL=https://app.srv1472299.hstgr.cloud, etc.
```

### 2. Réseau Docker du reverse proxy existant

Confirmé sur ce VPS (`docker network ls`) : la stack **n8n** déjà en place utilise le réseau **`n8n_default`**, déjà configuré dans `docker-compose.yml`.

### 3. Routage Traefik vers `app.srv1472299.hstgr.cloud`

Le service est configuré avec des labels Traefik (routeur `app`) :

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.app.rule=Host(`app.srv1472299.hstgr.cloud`)"
  - "traefik.http.routers.app.entrypoints=websecure"
  - "traefik.http.routers.app.tls.certresolver=letsencrypt"
  - "traefik.http.services.app.loadbalancer.server.port=3000"
```

⚠️ **Vérifie avant de lancer** que `entrypoints` (`websecure`) et `certresolver` (`letsencrypt`) correspondent aux noms réellement définis dans la configuration statique de ton Traefik existant (fichier `traefik.yml` ou arguments CLI/labels de son propre `docker-compose.yml`). Pour vérifier :

```bash
docker inspect <nom-du-conteneur-traefik> | grep -A3 "entryPoints\|certresolver\|certResolver"
# ou, si Traefik utilise un fichier de conf statique :
cat /chemin/vers/traefik.yml
```

Si les noms diffèrent, adapte les deux lignes correspondantes dans `docker-compose.yml`.

> Vérifie d'abord le proxy réellement utilisé : `docker compose -f <chemin-vers-le-compose-n8n> ps` sur le VPS pour lister les services de la stack n8n.

### 4. Build & lancement

```bash
docker compose build
docker compose up -d
docker compose logs -f landing-page
```

> ⚠️ Les variables `NEXT_PUBLIC_*` sont injectées **au build** (elles finissent dans le bundle JS envoyé au navigateur). Si tu modifies l'une d'elles dans `.env`, il faut relancer `docker compose build` (pas juste `up`) pour qu'elle soit prise en compte.

### 5. Mise à jour

```bash
git pull
docker compose build
docker compose up -d
```
