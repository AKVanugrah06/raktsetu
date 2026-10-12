import { t } from "@/lib/i18n";
import { FOUNDING_YEAR } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-sm text-gray-600 sm:flex-row sm:justify-between">
        <p>
          &copy; {FOUNDING_YEAR} {t("site.name")} &middot; {t("site.license")}
        </p>
        <a
          href={t("site.repoUrl")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand hover:text-brand-dark focus:outline-2 focus:outline-offset-2 focus:outline-brand"
        >
          {t("footer.repoLink")}
        </a>
      </div>
    </footer>
  );
}
