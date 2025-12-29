export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="text-sm text-gray-600 mb-4">
                “AIA helped me clear my exam on the first attempt.”
              </p>
              <p className="font-semibold">Student Name</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
