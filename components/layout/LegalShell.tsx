import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-page max-w-3xl py-20 md:py-28">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink"
          >
            <ArrowLeft size={16} /> Retour à l&apos;accueil
          </Link>
          <h1 className="mb-8 text-4xl font-extrabold text-ink">{title}</h1>
          <div className="flex flex-col gap-4 text-muted [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
