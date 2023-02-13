import { useRouter } from "next/router";
import { Button } from "../../components/ui/button";
import { EventList } from "../../components/events/event-list";
import { getFilteredEvents } from "../../helpers/api-util";
import { ErrorAlert } from "../../components/ui/error-alert";
import { ResultsTitle } from "../../components/events/results-title";

const FilteredEventsPage = ({ hasError, filteredEvents, numDate }) => {
  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!filteredEvents || !filteredEvents.length) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numDate.numYear, numDate.numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const filterData = context.params.slug;

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true, Alternativa: cair numa página 404
      // redirect: {
      //   destination: "/error"
      // } Alternativa: redirecionar para uma página de erro
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
      numDate: {
        numYear,
        numMonth,
      },
    },
  };
};

export default FilteredEventsPage;
