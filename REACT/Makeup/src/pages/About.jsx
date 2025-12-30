import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Top Section */}
      <section className="bg-amber-100 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">
          About Makeup API
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          We help you discover quality makeup products from trusted brands,
          all in one place. Simple, honest, and easy to use.
        </p>
      </section>

      {/* About Content */}
      <section className=" max-w-8xl mx-auto py-8 px-8 q grid md:grid-cols-2 gap-6 items-center bg-gray-800">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Who We Are ?  
          </h2>
          <p className="mb-4 text-white">
            Makeup API is built for beauty lovers who want clear information
            about products without marketing noise. We focus on transparency,
            usability, and real data.
          </p>
          <p className="text-white">
            Whether you are a beginner or a professional, our platform helps
            you explore makeup products easily and confidently.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            alt="Makeup products"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Our Partners
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
              alt="Brand 1"
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="font-medium">Lakme</h3>
            <p className="text-sm text-gray-600">
              Known for clean and affordable makeup products.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Brand 2"
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="font-medium">Garmin</h3>
            <p className="text-sm text-gray-600">
              Professional-grade cosmetics used by artists.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1612810806695-30f7a8258391"
              alt="Brand 3"
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="font-medium">Tesla</h3>
            <p className="text-sm text-gray-600">
              Focused on natural and skin-friendly ingredients.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default About;
