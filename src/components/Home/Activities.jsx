export default function ActivityCard({ title, location, date }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{location}</p>
      <p>{date}</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Join Activity
      </button>
    </div>
  );
}