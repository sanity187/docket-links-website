import { Check, Minus } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { pricingContent } from "@/lib/content/pricing";
import { LocalizedPricingPlan } from "@/lib/content/types";

interface PricingComparisonTableProps {
  locale: Locale;
  plans?: LocalizedPricingPlan[];
}

export function PricingComparisonTable({ locale, plans }: PricingComparisonTableProps) {
  const starterPlan = plans?.find((p) => p.id === "starter");
  const proPlan = plans?.find((p) => p.id === "pro");
  const scalePlan = plans?.find((p) => p.id === "scale");

  const leadUnit = t(pricingContent.cardLabels.leadUnit, locale);
  const starterCpl = starterPlan
    ? `$${(starterPlan.priceMonthly / starterPlan.monthlyLeads).toFixed(2)} / ${leadUnit}`
    : `$0.60 / ${leadUnit}`;
  const proCpl = proPlan
    ? `$${(proPlan.priceMonthly / proPlan.monthlyLeads).toFixed(2)} / ${leadUnit}`
    : `$0.60 / ${leadUnit}`;
  const scaleCpl = scalePlan
    ? `$${(scalePlan.priceMonthly / scalePlan.monthlyLeads).toFixed(2)} / ${leadUnit}`
    : `$0.55 / ${leadUnit}`;

  const ct = pricingContent.comparisonTable;
  const rows = [
    {
      feature: t(ct.rows.costPerLead, locale),
      free: t(ct.rows.extraLeadRate, locale),
      starter: starterCpl,
      pro: proCpl,
      scale: scaleCpl,
    },
    {
      feature: t(ct.rows.monthlyLeads, locale),
      free: "50",
      starter: (starterPlan?.monthlyLeads ?? 500).toLocaleString(),
      pro: (proPlan?.monthlyLeads ?? 5000).toLocaleString(),
      scale: (scalePlan?.monthlyLeads ?? 10000).toLocaleString(),
    },
    {
      feature: t(ct.rows.dailyLeads, locale),
      free: "5",
      starter: "50",
      pro: "500",
      scale: "1,000",
    },
    {
      feature: t(ct.rows.dailyExports, locale),
      free: "5",
      starter: "25",
      pro: "100",
      scale: "250",
    },
    {
      feature: t(ct.rows.aiLetters, locale),
      free: false,
      starter: t(ct.rows.aiLettersStarter, locale),
      pro: t(ct.rows.aiLettersPro, locale),
      scale: t(ct.rows.aiLettersScale, locale),
    },
    {
      feature: t(ct.rows.webhooks, locale),
      free: true,
      starter: true,
      pro: true,
      scale: true,
    },
    {
      feature: t(ct.rows.teamMembers, locale),
      free: t(ct.rows.unlimited, locale),
      starter: t(ct.rows.unlimited, locale),
      pro: t(ct.rows.unlimited, locale),
      scale: t(ct.rows.unlimited, locale),
    },
    {
      feature: t(ct.rows.cloudStorage, locale),
      free: "25 MB",
      starter: "500 MB",
      pro: "10 GB",
      scale: t(ct.rows.dedicatedCloud, locale),
    },
    {
      feature: t(ct.rows.uspsPresort, locale),
      free: false,
      starter: false,
      pro: true,
      scale: true,
    },
    {
      feature: t(ct.rows.apiAccess, locale),
      free: false,
      starter: false,
      pro: true,
      scale: true,
    },
    {
      feature: t(ct.rows.nativeRust, locale),
      free: true,
      starter: true,
      pro: true,
      scale: true,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground">
          {t(ct.title, locale)}
        </h3>
        <p className="mt-1 text-sm text-dim">
          {t(ct.subtitle, locale)}
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-line bg-panel/80 backdrop-blur-sm shadow-sm">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-line bg-muted/40">
              <th className="p-4 font-bold text-foreground min-w-[200px]">
                {t(ct.featureCol, locale)}
              </th>
              <th className="p-4 font-bold text-foreground text-center">
                {t(ct.freeCol, locale)}
              </th>
              <th className="p-4 font-bold text-foreground text-center">Starter</th>
              <th className="p-4 font-bold text-primary text-center">Professional</th>
              <th className="p-4 font-bold text-foreground text-center">Scale</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-muted/30 transition-colors">
                <td className="p-4 font-medium text-foreground">{row.feature}</td>

                {["free", "starter", "pro", "scale"].map((planKey) => {
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
