type SectionHeaderProps = {
  index: string;
  title: string;
  description: string;
};

export function SectionHeader({ index, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="section-index">{index}</span>
        <span className="h-px flex-1 max-w-24 bg-linear-to-r from-cyan-500/60 to-transparent" />
      </div>
      <div className="max-w-2xl space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-slate-400 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
