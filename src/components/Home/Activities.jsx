import ActivityCard from "./ActivityCard";

export default function Activities() {
  const activities = [
    {
      title: "Beach Cleanup Drive",
      location: "Vizag Beach",
      date: "June 10",
    },
    {
      title: "Tree Plantation",
      location: "Vijayawada",
      date: "June 15",
    },
    {
      title: "Blood Donation Camp",
      location: "Hyderabad",
      date: "June 20",
    },
  ];

  return (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Upcoming Activities
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.title}
            location={activity.location}
            date={activity.date}
          />
        ))}
      </div>

    </div>
  </section>
);
}