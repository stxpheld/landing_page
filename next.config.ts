import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Évite l'ambiguïté de racine quand plusieurs lockfiles existent sur la machine.
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
