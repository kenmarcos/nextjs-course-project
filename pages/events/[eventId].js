import { EventContent } from "../../components/event-detail/event-content";
import { EventLogistics } from "../../components/event-detail/event-logistics";
import { EventSummary } from "../../components/event-detail/event-summary";
import { ErrorAlert } from "../../components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import Comments from "../../components/input/comments";

const EventDetailsPage = ({ event }) => {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />

      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>
        <p>{event.description}</p>
      </EventContent>

      <Comments eventId={event.id} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30, // A cada 30 segundos
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => {
    return { params: { eventId: event.id } };
  });

  return {
    paths,
    fallback: "blocking", // Diz ao Next.js que existem mais páginas do que as definidas previamente
  };
};

export default EventDetailsPage;
