export default function Features() {

  const features = [
    "Volunteer Opportunities",
    "Community Groups",
    "Impact Tracking",
    "Events & Activities"
  ];

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why KartavyaMitra?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-2xl"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}