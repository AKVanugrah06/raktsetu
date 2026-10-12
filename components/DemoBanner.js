import { t } from "@/lib/i18n";

export default function DemoBanner() {
  return (
    <div
      role="status"
      className="bg-brand-dark px-4 py-2 text-center text-sm font-medium text-white"
    >
      {t("site.demoBanner")}
    </div>
  );
}
