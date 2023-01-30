import { EventList } from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <h1 className="center title">Featured Events</h1>
      <EventList events={featuredEvents} />
    </>
  );
};

export default HomePage;
