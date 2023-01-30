import { EventList } from "../../components/events/event-list";
import { EventsSearch } from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  );
};

export default EventsPage;
