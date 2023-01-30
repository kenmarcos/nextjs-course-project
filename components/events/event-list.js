import { EventItem } from "./event-item";

import styles from "./event-list.module.css";

export const EventList = (props) => {
  const { events } = props;

  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} eventItem={event} />
      ))}
    </ul>
  );
};
