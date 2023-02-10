import { EventList } from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = ({ featuredEvents }) => {
  return (
    <>
      <h1 className="center title">Featured Events</h1>
      <EventList events={featuredEvents} />
    </>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
  };
};

export default HomePage;
