export function CollectionSkeleton() {
  const ShimmerBox = ({ className }: { className: string }) => (
    <div className={`space-y-4 ${className}`}>
      <div className="relative aspect-[3/4] bg-muted animate-pulse rounded-sm" />
      <div className="space-y-2">
        <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
        <div className="h-3 w-1/4 bg-muted animate-pulse rounded" />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      <ShimmerBox className="lg:pt-12" />
      <ShimmerBox className="" />
      <ShimmerBox className="lg:pt-24" />
      <ShimmerBox className="" />
      <ShimmerBox className="lg:pt-16" />
      <ShimmerBox className="lg:-mt-8" />
    </div>
  );
}
