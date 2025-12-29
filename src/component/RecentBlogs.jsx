export default function RecentBlogs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Blogs</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="h-40 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Certification Exam Tips</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  explicabo, nobis libero quo doloribus sunt vitae consectetur
                  qui hic assumenda dolorem similique distinctio nisi tempora
                  eveniet corrupti nam architecto itaque, quae voluptatibus.
                  Porro, temporibus. Id facere reiciendis libero amet, deserunt
                  et ipsam hic molestias inventore accusantium itaque ex. Saepe
                  est magni id illo eveniet voluptas voluptatum quisquam, ab
                  ipsa quis aliquam dignissimos beatae nostrum maiores. Illum
                  vitae iusto dicta ex nam sequi nostrum veritatis aliquid
                  cumque, eos asperiores eligendi esse. Rerum, fugiat, ut nobis
                  veritatis laborum doloremque sit, ducimus ab possimus qui quae
                  numquam ratione. Natus laborum mollitia recusandae
                  praesentium.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
