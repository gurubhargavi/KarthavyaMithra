import ActivityCard from "./ActivityCard";
function Features() {
  return (
   <section>
  <h2>Upcoming Activities</h2>

  <ActivityCard
    title="Beach Cleanup Drive"
    location="Visakhapatnam"
  />

  <ActivityCard
    title="Tree Plantation"
    location="Vijayawada"
  />

  <ActivityCard
    title="Blood Donation Camp"
    location="Hyderabad"
  />
</section>
  );
}

export default Features;