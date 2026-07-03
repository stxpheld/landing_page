import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Évite l'ambiguïté de racine quand plusieurs lockfiles existent sur la machine.
  turbopack: { root: path.resolve(__dirname) },
  // Image de production Docker allégée (sortie autonome avec serveur Node minimal).
  output: "standalone",
};

export default nextConfig;
