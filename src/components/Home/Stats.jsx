export default function Stats() {
  const stats = [
    { number: "500+", title: "Volunteers" },
    { number: "100+", title: "Events" },
    { number: "25+", title: "NGOs" },
    { number: "5000+", title: "Service Hours" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <h2 className="text-4xl font-bold text-green-700">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-600">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}