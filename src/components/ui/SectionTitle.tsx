type SectionTitleProps = {
  badge?: string;
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {badge && (
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold tracking-tight">
        {title}
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}