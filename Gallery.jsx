export default function Gallery() {
  const images = [
    "/images/FB_IMG_1780861818225.jpg",
    "/images/FB_IMG_1780861824534.jpg",
    "/images/FB_IMG_1780861831863.jpg",
    "/images/FB_IMG_1780861877515.jpg",
    "/images/FB_IMG_1780861886548.jpg",
    "/images/FB_IMG_1780861893505.jpg",
    "/images/FB_IMG_1780861904474.jpg",
    "/images/FB_IMG_1780861931263.jpg",
    "/images/FB_IMG_1780861937487.jpg",
    "/images/FB_IMG_1780861977580.jpg",
    "/images/FB_IMG_1780861989749.jpg",
    "/images/FB_IMG_1780861994963.jpg",
    "/images/IMG-20191230-WA0006.jpeg",
    "/images/IMG-20220618-WA0057.jpeg",
    "/images/IMG-20220625-WA0003.jpeg",
    "/images/IMG-20220808-WA0003.jpeg",
    "/images/IMG-20220808-WA0004.jpeg",
    "/images/IMG-20220808-WA0008.jpeg",
    "/images/IMG20240325215244.jpg",
    "/images/IMG20240330212251.jpg",
    "/images/IMG20250220224452.jpg",
    "/images/IMG20250305201541.jpg",
    "/images/IMG20251214211619.jpg",
    "/images/IMG20260117125126.jpg",
    "/images/IMG_20200102_175954.jpg",
    "/images/IMG_20240410_203051.jpg"
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-pink-700 mb-12">
        Handmade Gallery ✨
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Craft"
            className="rounded-2xl shadow-lg w-full"
          />
        ))}
      </div>
    </section>
  );
}
