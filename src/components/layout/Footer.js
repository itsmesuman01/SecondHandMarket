import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-base hover:text-yellow-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/sell" className="text-base hover:text-yellow-400 transition-colors">Sell</Link>
              </li>
              <li>
                <Link href="/buy" className="text-base hover:text-yellow-400 transition-colors">Buy</Link>
              </li>
              <li>
                <Link href="/contact" className="text-base hover:text-yellow-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-400">&copy; 2024 SecondHandStore. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            Disclaimer: The items listed for sale are used, and we do not guarantee the condition of products.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
