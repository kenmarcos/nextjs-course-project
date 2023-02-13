import { EventList } from "../../components/events/event-list";
import { EventsSearch } from "../../components/events/events-search";
import { getAllEvents } from "../../helpers/api-util";

const EventsPage = ({ events }) => {
  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60, // A cada 60 segundos
  };
};

export default EventsPage;
