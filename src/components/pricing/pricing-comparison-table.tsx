import { Check, Minus } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";

interface PricingComparisonTableProps {
  locale: Locale;
}

export function PricingComparisonTable({ locale }: PricingComparisonTableProps) {
  const isEs = locale === "es";

  const rows = [
    {
      feature: isEs ? "Costo estimado por caso" : "Cost per lead",
      free: "$0",
      starter: "$0.65 / lead",
      pro: "$0.60 / lead",
      scale: "$0.55 / lead",
      enterprise: "< $0.50 / lead",
    },
    {
      feature: isEs ? "Casos y enriquecimientos / mes" : "Monthly leads & enrichments",
      free: "25",
      starter: "500",
      pro: "2,000",
      scale: "10,000",
      enterprise: "25,000+",
    },
    {
      feature: isEs ? "Límite diario de casos" : "Daily lead quota",
      free: "5",
      starter: "50",
      pro: "200",
      scale: "1,000",
      enterprise: isEs ? "Personalizado" : "Custom",
    },
    {
      feature: isEs ? "Miembros y usuarios de equipo" : "Team member logins",
      free: isEs ? "Ilimitados" : "Unlimited",
      starter: isEs ? "Ilimitados" : "Unlimited",
      pro: isEs ? "Ilimitados" : "Unlimited",
      scale: isEs ? "Ilimitados" : "Unlimited",
      enterprise: isEs ? "Ilimitados" : "Unlimited",
    },
    {
      feature: isEs ? "Preclasificación CASS USPS (Ahorro 30-50%)" : "USPS CASS Direct Mail Presort",
      free: false,
      starter: false,
      pro: true,
      scale: true,
      enterprise: true,
    },
    {
      feature: isEs ? "Bloqueo y asignación de casos entre abogados" : "Multi-attorney collision guard",
      free: false,
      starter: true,
      pro: true,
      scale: true,
      enterprise: true,
    },
    {
      feature: isEs ? "Perfiles de búsqueda guardados" : "Saved search profiles",
      free: "3",
      starter: "10",
      pro: "50",
      scale: isEs ? "Ilimitados" : "Unlimited",
      enterprise: isEs ? "Ilimitados" : "Unlimited",
    },
    {
      feature: isEs ? "Endpoints de webhooks automatizados" : "Webhook integration endpoints",
      free: "0",
      starter: "1",
      pro: "5",
      scale: "25",
      enterprise: isEs ? "Ilimitados" : "Unlimited",
    },
    {
      feature: isEs ? "Acceso a API REST / GraphQL" : "Full REST/GraphQL API access",
      free: false,
      starter: false,
      pro: true,
      scale: true,
      enterprise: true,
    },
    {
      feature: isEs ? "Motor nativo Rust + SQLite local" : "Native Rust + local SQLite speed",
      free: true,
      starter: true,
      pro: true,
      scale: true,
      enterprise: true,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground">
          {isEs ? "Comparativa Detallada de Planes" : "Detailed Feature Comparison"}
        </h3>
        <p className="mt-1 text-sm text-dim">
          {isEs
            ? "Vea todas las capacidades disponibles en cada nivel de servicio"
            : "Compare technical quotas, automation tools, and capabilities"}
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-line bg-panel/80 backdrop-blur-sm shadow-sm">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-line bg-muted/40">
              <th className="p-4 font-bold text-foreground min-w-[200px]">
                {isEs ? "Característica" : "Feature"}
              </th>
              <th className="p-4 font-bold text-foreground text-center">Free</th>
              <th className="p-4 font-bold text-foreground text-center">Starter</th>
              <th className="p-4 font-bold text-primary text-center">Professional</th>
              <th className="p-4 font-bold text-foreground text-center">Scale</th>
              <th className="p-4 font-bold text-foreground text-center">Enterprise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-muted/30 transition-colors">
                <td className="p-4 font-medium text-foreground">{row.feature}</td>

                {["free", "starter", "pro", "scale", "enterprise"].map((planKey) => {
                  const val = row[planKey as keyof typeof row];
                  return (
                    <td key={planKey} className="p-4 text-center text-dim font-mono text-xs">
                      {typeof val === "boolean" ? (
                        val ? (
                          <Check className="h-4 w-4 text-emerald-400 mx-auto" />
                        ) : (
                          <Minus className="h-4 w-4 text-dim/40 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-foreground">{val}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
