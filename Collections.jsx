const collections = [
  "Floral Baskets",
  "Papercraft",
  "Resin Art",
  "Festive Decor"
];

export default function Collections() {
  return (
    <section className="bg-pink-50 py-20 px-6">
      <h2 className="text-4xl text-center font-bold text-pink-700 mb-12">
        Featured Collections 🌸
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {collections.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-2xl font-semibold text-pink-700">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}