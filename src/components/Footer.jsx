export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Kailash</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Shaping tomorrow with innovative infrastructure, renewable energy,
            and financial excellence. We deliver sustainable growth for a better future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/products" className="hover:text-yellow-400">Products</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Infrastructure Solutions</a></li>
            <li><a href="#" className="hover:text-yellow-400">Solar EPC</a></li>
            <li><a href="#" className="hover:text-yellow-400">Building Structures</a></li>
            <li><a href="#" className="hover:text-yellow-400">Financial Consultancy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400">Twitter</a>
            <a href="#" className="hover:text-yellow-400">Facebook</a>
            <a href="#" className="hover:text-yellow-400">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © 2025 Kailash.org.in - All Rights Reserved
      </div>
    </footer>
  );
}


