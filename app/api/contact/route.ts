import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  sector?: string;
  message?: string;
  source?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Validation minimale côté serveur
  if (!data.name || !data.email || !data.message || !data.consent) {
    return NextResponse.json(
      { error: "Champs requis manquants." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  // Dégradation propre : sans clé Resend, on ne plante pas — on logge.
  if (!apiKey) {
    console.info("[contact] Nouvelle demande (Resend non configuré) :", {
      name: data.name,
      email: data.email,
      company: data.company,
      sector: data.sector,
      source: data.source,
    });
    return NextResponse.json({
      ok: true,
      delivered: false,
      note: "Configuration email à finaliser (RESEND_API_KEY).",
    });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Agence IA <onboarding@resend.dev>",
      to,
      replyTo: data.email,
      subject: `Nouvelle demande de ${data.name}${data.company ? ` · ${data.company}` : ""}`,
      text: [
        `Nom : ${data.name}`,
        `Email : ${data.email}`,
        `Entreprise : ${data.company || "—"}`,
        `Secteur : ${data.sector || "—"}`,
        `Source : ${data.source || "—"}`,
        "",
        "Besoin :",
        data.message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Échec d'envoi Resend :", err);
    return NextResponse.json(
      { error: "Envoi impossible pour le moment." },
      { status: 502 },
    );
  }
}
