export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Nossas Marmitas
          </h2>

          <p className="text-gray-500 mt-4">
            Qualidade, sabor e nutrição em cada refeição.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">

          <div className="md:col-span-2 md:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
            alt=""
            className="w-full h-64 object-cover rounded-3xl"
          />

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt=""
            className="w-full h-64 object-cover rounded-3xl"
          />

          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            alt=""
            className="w-full h-64 object-cover rounded-3xl"
          />

          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt=""
            className="w-full h-64 object-cover rounded-3xl"
          />

        </div>

      </div>
    </section>
  );
}