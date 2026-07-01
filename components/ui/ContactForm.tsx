"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "./Button";
import { finalCta } from "@/lib/content";

type FormValues = {
  name: string;
  email: string;
  company?: string;
  sector?: string;
  message: string;
  source?: string;
  consent: boolean;
};

const fieldClass =
  "w-full rounded-[var(--radius-btn)] border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-signal focus:bg-white/[0.1]";
const labelClass = "mb-1.5 block text-sm font-medium text-white/80";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] border border-signal/30 bg-signal/10 p-8 text-center">
        <CheckCircle2 className="text-signal" size={40} aria-hidden="true" />
        <p className="font-display text-xl font-semibold text-white">
          Message bien reçu !
        </p>
        <p className="max-w-xs text-sm text-white/70">
          Je vous réponds sous 24h (jours ouvrés). À très vite.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Prénom & Nom <span className="text-signal">*</span>
          </label>
          <input
            id="name"
            className={fieldClass}
            placeholder="Marie Dupont"
            aria-invalid={!!errors.name}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-signal">Ce champ est requis.</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-signal">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={fieldClass}
            placeholder="marie@entreprise.fr"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: true,
              pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-signal">Email valide requis.</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            Entreprise
          </label>
          <input
            id="company"
            className={fieldClass}
            placeholder="Nom de l'entreprise"
            {...register("company")}
          />
        </div>
        <div>
          <label htmlFor="sector" className={labelClass}>
            Secteur d&apos;activité
          </label>
          <select id="sector" className={fieldClass} {...register("sector")}>
            <option value="">Sélectionner…</option>
            {finalCta.formSectors.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Décrivez votre besoin <span className="text-signal">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className={`${fieldClass} resize-y`}
          placeholder="Quel process aimeriez-vous automatiser ou améliorer ?"
          aria-invalid={!!errors.message}
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-signal">Ce champ est requis.</p>
        )}
      </div>

      <div>
        <label htmlFor="source" className={labelClass}>
          Comment avez-vous connu l&apos;agence ?
        </label>
        <select id="source" className={fieldClass} {...register("source")}>
          <option value="">Sélectionner…</option>
          {finalCta.formSources.map((s) => (
            <option key={s} value={s} className="text-ink">
              {s}
            </option>
          ))}
        </select>
      </div>

      <label className="flex items-start gap-3 text-sm text-white/70">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-signal)]"
          aria-invalid={!!errors.consent}
          {...register("consent", { required: true })}
        />
        <span>
          J&apos;accepte que mes données soient utilisées pour être recontacté(e).
          Elles ne sont jamais partagées. {errors.consent && (
            <span className="text-signal">— consentement requis.</span>
          )}
        </span>
      </label>

      <Button
        type="submit"
        size="lg"
        variant="primary"
        disabled={status === "loading"}
        className="mt-1 w-full"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Envoi…
          </>
        ) : (
          <>
            Envoyer ma demande <ArrowRight size={18} />
          </>
        )}
      </Button>

      {status === "error" && (
        <p className="text-sm text-signal" role="alert">
          Une erreur est survenue. Réessayez ou écrivez-moi directement.
        </p>
      )}
    </form>
  );
}
