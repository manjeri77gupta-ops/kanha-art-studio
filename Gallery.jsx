export default function Gallery() {
  const images = [
    "/images/IMG20240325215244.jpg",
    "/images/IMG20240330212251.jpg",
    "/images/IMG20250520224452.jpg",
    "/images/IMG20250305201541.jpg",
    "/images/IMG20251214211619.jpg",
    "/images/IMG20260117125126.jpg"
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-pink-700 mb-12">
        Handmade Gallery ✨
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
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
