export default function Hero() {
  return (
    <section className="text-center py-28 px-6 bg-gradient-to-br from-pink-100 to-yellow-50">
      <h1 className="text-5xl md:text-7xl font-bold text-pink-700 mb-6">
        KanhaArtStudio.art
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-10">
        “Handcrafted creations that turn moments into memories ✨”
      </p>

      <a
        href="https://wa.me/916376194416"
        className="inline-block mt-10 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl text-lg"
      >
        Order on WhatsApp
      </a>
    </section>
  );
}