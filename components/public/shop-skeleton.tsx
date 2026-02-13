export function ShopSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="space-y-4">
          <div className="relative aspect-[3/4] bg-muted animate-pulse rounded-sm" />
          <div className="space-y-2">
            <div className="h-3 w-20 bg-muted animate-pulse rounded" />
            <div className="h-5 w-40 bg-muted animate-pulse rounded" />
            <div className="h-4 w-12 bg-muted animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}
