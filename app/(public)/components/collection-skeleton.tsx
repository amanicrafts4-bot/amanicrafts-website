export function CollectionSkeleton() {
  const ShimmerCard = ({ className }: { className: string }) => (
    <div className={`space-y-6 ${className}`}>
      <div className="relative aspect-[3/4] bg-slate-100 animate-pulse rounded-sm" />
      <div className="space-y-2 px-2">
        <div className="h-3 w-20 bg-slate-100 animate-pulse rounded" />
        <div className="h-6 w-3/4 bg-slate-100 animate-pulse rounded" />
        <div className="h-4 w-12 bg-slate-100 animate-pulse rounded" />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      <ShimmerCard className="lg:pt-12" />
      <ShimmerCard className="" />
      <ShimmerCard className="lg:pt-24" />
      <ShimmerCard className="" />
      <ShimmerCard className="lg:pt-16" />
      <ShimmerCard className="lg:-mt-8" />
    </div>
  );
}
