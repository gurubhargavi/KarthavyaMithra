export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold mb-6">
          Transform Your Free Time Into Social Impact
        </h1>

        <p className="text-xl mb-8 max-w-2xl">
          Join communities, participate in activities,
          volunteer for causes, and create measurable impact.
        </p>

        <div className="flex gap-4">

          <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            Explore Activities
          </button>

        </div>

      </div>

    </section>
  );
}