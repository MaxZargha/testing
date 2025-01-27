

export default function EcommerceHome() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen font-serif">
      {/* Header */}
      <header className="bg-white shadow-2xl p-8 sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-black text-blue-800 tracking-tight">Maison Perse</h1>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-800 hover:text-blue-800 font-semibold text-lg transition">Home</a></li>
              <li><a href="#products" className="text-gray-800 hover:text-blue-800 font-semibold text-lg transition">Products</a></li>
              <li><a href="#cart" className="text-gray-800 hover:text-blue-800 font-semibold text-lg transition">Cart</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-blue-800 font-semibold text-lg transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-extrabold mb-8">Welcome to Maison Perse</h2>
          <p className="text-2xl mb-12">Experience luxury, quality, and security like never before.</p>
          <a href="#products">
            <Button className="bg-white text-blue-900 px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-200 transition">Explore Now</Button>
          </a>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 text-center mb-16">Our Exclusive Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {[1, 2, 3, 4, 5, 6].map((product) => (
              <Card key={product} className="shadow-2xl transform hover:scale-105 transition">
                <CardHeader className="h-60 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center border-b">
                  <span className="text-gray-500 text-2xl font-medium">Product Image</span>
                </CardHeader>
                <CardContent>
                  <h3 className="text-3xl font-bold mb-4">Product {product}</h3>
                  <p className="text-gray-700 mb-8">An elegant and luxurious product crafted with precision and care.</p>
                  <div className="mt-8 flex justify-between items-center">
                    <span className="text-blue-900 font-bold text-2xl">$249.99</span>
                    <Button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="text-xl mb-6 font-light">&copy; 2025 Maison Perse. Redefining luxury and security in e-commerce.</p>
          <ul className="flex justify-center space-x-8">
            <li><a href="#" className="hover:underline text-lg">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline text-lg">Terms of Service</a></li>
            <li><a href="#" className="hover:underline text-lg">Support</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
          <p>&copy; 2025 My E-Commerce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
