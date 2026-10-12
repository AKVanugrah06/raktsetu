export default function FeatureCard({ title, description }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-brand">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
    </div>
  );
}
