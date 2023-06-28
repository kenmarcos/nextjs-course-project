import { EventList } from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
import NewsletterRegistration from "../components/input/newsletter-registration";

const HomePage = ({ featuredEvents }) => {
  return (
    <>
      <h1 className="center title">Featured Events</h1>

      <NewsletterRegistration />

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
    revalidate: 60 * 30, // A cada 30 minutos
  };
};

export default HomePage;
