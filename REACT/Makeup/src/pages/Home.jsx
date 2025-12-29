import React from "react";

const Home = () => {
  return (
    <>
      {/* main area top */}
      <section className="relative h-[80vh] w-full ">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          alt="Makeup hero"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl ">
            <h1 className="text-5xl font-bold mb-4">
              Glow That Speaks for You
            </h1>
            <p className="text-lg mb-6">
              Premium makeup products for everyday confidence.
            </p>
            <a
              href="/products"
              className="inline-block bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full font-medium"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-8xl mx-auto px-20 py-20 grid grid-cols-2 gap-8 items-center text-white bg-gray-800">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Why Choose Our Makeup?
          </h2>
          <p className="text-white">
            Clean ingredients, long-lasting formulas, and shades that work on
            real skin tones. Simple, honest products.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1586495777744-4413f21062fa"
          alt="Makeup products"
          className="w-full h-96 object-cover rounded-xl"
        />
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-10">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl text-center shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a"
                alt="Skin friendly"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">Skin-Friendly</h3>
              <p className="text-gray-600 text-sm">
                Safe for daily use on all skin types.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
                alt="Long lasting"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">Long-Lasting</h3>
              <p className="text-gray-600 text-sm">
                Stays intact through long days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571"
                alt="Cruelty free"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">Cruelty-Free</h3>
              <p className="text-gray-600 text-sm">
                Never tested on animals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* bottom area */}
      <section className="max-w-6xl mx-auto px-10 py-24 grid grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
          alt="Makeup collection"
          className="w-full h-80 object-cover rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Upgrade Your Look?
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our collection and find what fits your style.
          </p>

          {/* HREF BUTTON will be here to products  */}
          <a
            href="/products"
            className="inline-block bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full text-white font-medium"
          >
            Explore Products
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
