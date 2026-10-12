import { t } from "@/lib/i18n";

export default function BloodBankCard({ bank }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-900">{bank.name}</h3>
        <span className="rounded-full bg-brand-light px-2 py-0.5 text-xs font-medium text-brand-dark">
          {t("bloodBanks.demoBadge")}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-700">{bank.address}</p>
      <p className="mt-1 text-sm text-gray-600">
        {bank.city}, {bank.state}
      </p>
      <p className="mt-2 text-sm text-gray-600">
        <span className="font-medium">{t("bloodBanks.hoursLabel")}:</span>{" "}
        {bank.hours}
      </p>
    </div>
  );
}
