export const Shimmer = ({ className }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-slate-100 ${className}`} />
);

export const ProductRowSkeleton = () => (
  <tr className="border-b last:border-0">
    <td className="p-4 flex items-center gap-3">
      <Shimmer className="h-8 w-8 rounded-lg" />
      <Shimmer className="h-5 w-40" />
    </td>
    <td className="p-4">
      <Shimmer className="h-6 w-24 rounded-full" />
    </td>
    <td className="p-4">
      <Shimmer className="h-5 w-16" />
    </td>
    <td className="p-4 text-right">
      <div className="flex justify-end gap-2">
        <Shimmer className="h-8 w-8 rounded-lg" />
      </div>
    </td>
  </tr>
);
