import Link from 'next/link';

const TopBar = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold">
          SecondHandStore
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-lg hover:text-yellow-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/sell" className="text-lg hover:text-yellow-400 transition-colors">Sell</Link>
            </li>
            <li>
              <Link href="/buy" className="text-lg hover:text-yellow-400 transition-colors">Buy</Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg hover:text-yellow-400 transition-colors">Contact</Link>
            </li>
            <li>
              <Link href="/login" className="text-lg hover:text-yellow-400 transition-colors">Login</Link>
            </li>
            <li>
              <Link href="/register" className="text-lg hover:text-yellow-400 transition-colors">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
