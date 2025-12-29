export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-3">AIA</h3>
          <p className="text-sm">
            Professional certification training institute.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">info@aia.in.net</p>
          <p className="text-sm">+91 XXXXX XXXXX</p>
        </div>
      </div>
    </footer>
  );
}
