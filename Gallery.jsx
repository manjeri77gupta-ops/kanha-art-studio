import { useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const images = [

  // Resin Art
  { src: "/images/Resin/FB_IMG_1780861814200.jpg", category: "Resin Art" },
  { src: "/images/Resin/FB_IMG_1780861818225.jpg", category: "Resin Art" },
  { src: "/images/Resin/FB_IMG_1780861824534.jpg", category: "Resin Art" },
  { src: "/images/Resin/FB_IMG_1780861831863.jpg", category: "Resin Art" },

  // Crochet
  { src: "/images/Crochet/IMG20240325215244.jpg", category: "Crochet" },
  { src: "/images/Crochet/IMG20250220224452.jpg", category: "Crochet" },
  { src: "/images/Crochet/IMG20250305201541.jpg", category: "Crochet" },
  { src: "/images/Crochet/IMG20260117125126.jpg", category: "Crochet" },
  { src: "/images/Crochet/IMG_20240410_203051.jpg", category: "Crochet" },
  { src: "/images/Crochet/IMG-20240406-WA0005.jpeg", category: "Crochet" },

  // Papercraft
  { src: "/images/Papercraft/FB_IMG_1780861877515.jpg", category: "Papercraft" },
  { src: "/images/Papercraft/FB_IMG_1780861886548.jpg", category: "Papercraft" },
  { src: "/images/Papercraft/FB_IMG_1780861931263.jpg", category: "Papercraft" },
  { src: "/images/Papercraft/FB_IMG_1780861937487.jpg", category: "Papercraft" },
  { src: "/images/Papercraft/FB_IMG_1780861989749.jpg", category: "Papercraft" },
  { src: "/images/Papercraft/FB_IMG_1780861994963.jpg", category: "Papercraft" },
  { src: "/images/Papercraft/IMG-20191230-WA0006.jpeg", category: "Papercraft" },
  { src: "/images/Papercraft/IMG20250418132606.jpg", category: "Papercraft" },
  { src: "/images/Papercraft/IMG20251214211619.jpg", category: "Papercraft" },
  { src: "/images/Papercraft/IMG_20200102_175954.jpg", category: "Papercraft" },

  // Festive Decor
  { src: "/images/festive/FB_IMG_1780861904474.jpg", category: "Festive Decor" },
  { src: "/images/festive/FB_IMG_1780861977580.jpg", category: "Festive Decor" },
  { src: "/images/festive/FB_IMG_1780862017183.jpg", category: "Festive Decor" },
  { src: "/images/festive/FB_IMG_1780862035599.jpg", category: "Festive Decor" },
  { src: "/images/festive/IMG20250128072211.jpg", category: "Festive Decor" },
  { src: "/images/festive/IMG20250131030606.jpg", category: "Festive Decor" },

  // Floral Baskets
  { src: "/images/floral/IMG20230621114136.jpg", category: "Floral Baskets" },
  { src: "/images/floral/IMG20230621114220.jpg", category: "Floral Baskets" },
  { src: "/images/floral/IMG20240108164008.jpg", category: "Floral Baskets" },
  { src: "/images/floral/IMG20240108164045.jpg", category: "Floral Baskets" },
  { src: "/images/floral/IMG20240108164215_BURST001.jpg", category: "Floral Baskets" },
  { src: "/images/floral/IMG20240108164225.jpg", category: "Floral Baskets" },
  { src: "/images/floral/IMG20240519220034.jpg", category: "Floral Baskets" },
  { src: "/images/floral/IMG20240519220106.jpg", category: "Floral Baskets" },

  // Fridge Magnets
  { src: "/images/Frdge-magnet/FB_IMG_1780861893505.jpg", category: "Fridge Magnets" },
  { src: "/images/Frdge-magnet/IMG_20190615_195638.jpg", category: "Fridge Magnets" },
  { src: "/images/Frdge-magnet/IMG_20200511_123250.jpg", category: "Fridge Magnets" },
  { src: "/images/Frdge-magnet/IMG_20200511_123324.jpg", category: "Fridge Magnets" },
  { src: "/images/Frdge-magnet/IMG_20260608_122412.jpg", category: "Fridge Magnets" },
  { src: "/images/Frdge-magnet/IMG_20260608_122508.jpg", category: "Fridge Magnets" },

];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-pink-700 mb-8">
        Handmade Gallery ✨
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          "All",
          "Resin Art",
          "Crochet",
          "Papercraft",
          "Festive Decor",
          "Floral Baskets",
          "Fridge Magnets"
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat
                ? "bg-pink-600 text-white"
                : "bg-pink-100 text-pink-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.category}
            className="rounded-2xl shadow-lg w-full hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}
