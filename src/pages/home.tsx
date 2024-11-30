import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <section className="bg-blue-600 text-white text-center py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to SecondHandStore</h1>
          <p className="text-xl mb-6">Buy and sell used items easily. Join the marketplace today!</p>
          <Link
            href="/register"
            className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-md text-xl hover:bg-yellow-400 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Easy to Use</h3>
              <p className="text-lg text-gray-600">Our platform is simple and intuitive, allowing you to buy and sell with ease.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Safe and Secure</h3>
              <p className="text-lg text-gray-600">We ensure secure transactions between buyers and sellers, protecting your information.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Wide Variety</h3>
              <p className="text-lg text-gray-600">From electronics to furniture, you’ll find a wide variety of second-hand items to buy and sell.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="mb-6">
                <span className="text-4xl text-blue-600">&#128073;</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Create an Account</h3>
              <p className="text-lg text-gray-600">Sign up to become a member of the marketplace.</p>
            </div>
            <div>
              <div className="mb-6">
                <span className="text-4xl text-blue-600">&#128181;</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">List Your Items</h3>
              <p className="text-lg text-gray-600">Easily upload pictures and descriptions of items you wish to sell.</p>
            </div>
            <div>
              <div className="mb-6">
                <span className="text-4xl text-blue-600">&#128178;</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Buy or Sell</h3>
              <p className="text-lg text-gray-600">Browse listings and buy the items you need or sell your own items to others.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white text-center py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-6">Join our growing marketplace and start buying or selling today!</p>
          <Link
            href="/register"
            className="bg-yellow-500 text-gray-800 px-8 py-4 rounded-md text-xl hover:bg-yellow-400 transition-colors"
          >
            Create an Account
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
