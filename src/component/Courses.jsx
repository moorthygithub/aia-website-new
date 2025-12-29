export default function Courses() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Courses We Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between animate-pulse"
            >
              {/* Header */}
              <div className="h-8 w-32 bg-gray-200 rounded mb-6"></div>

              {/* Content */}
              <div className="space-y-4 flex-grow">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>

              {/* Footer / Button */}
              <div className="h-10 w-32 bg-gray-200 rounded mt-6 self-start"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
