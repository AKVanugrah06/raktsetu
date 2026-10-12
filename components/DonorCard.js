"use client";

import { useState } from "react";
import { t } from "@/lib/i18n";

export default function DonorCard({ donor }) {
  const [requested, setRequested] = useState(false);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-900">{donor.firstName}</h3>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            donor.available
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {donor.available
            ? t("donors.availableBadge")
            : t("donors.unavailableBadge")}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-700">{donor.bloodGroup}</p>
      <p className="mt-1 text-sm text-gray-600">{donor.city}</p>

      <button
        type="button"
        disabled={!donor.available}
        onClick={() => setRequested(true)}
        className="mt-3 w-full rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white hover:bg-brand-dark focus:outline-2 focus:outline-offset-2 focus:outline-brand-dark disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {t("donors.requestContact")}
      </button>

      {requested && (
        <p role="status" className="mt-2 text-sm text-brand-dark">
          {t("donors.demoModeNotice")}
        </p>
      )}
    </div>
  );
}
