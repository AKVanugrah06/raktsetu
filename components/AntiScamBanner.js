export default function AntiScamBanner({ title, body }) {
  return (
    <div
      role="alert"
      className="rounded-lg border-2 border-brand bg-brand-light p-4"
    >
      <p className="font-semibold text-brand-dark">{title}</p>
      <p className="mt-1 text-sm text-gray-800">{body}</p>
    </div>
  );
}
