export default function IncomesPageSkeleton() {
  return (
    <div className="mx-auto lg:w-3/4">
      <div className="h-15 w-60 bg-neutral-200 rounded-xl mb-8 lg:mb-10 animate-pulse" />
      <div className="space-y-4 lg:space-y-6">
        <div className="h-20 bg-neutral-200 rounded-xl animate-pulse" />
        <div className="h-20 bg-neutral-200 rounded-xl animate-pulse" />
        <div className="h-20 bg-neutral-200 rounded-xl animate-pulse" />
        <div className="h-20 bg-neutral-200 rounded-xl animate-pulse" />
      </div>
    </div>
  );
}
