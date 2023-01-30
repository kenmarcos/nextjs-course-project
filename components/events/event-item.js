import { Button } from "../ui/button";
import { AddressIcon } from "../icons/address-icon";
import { ArrowRightIcon } from "../icons/arrow-right-icon";
import { DateIcon } from "../icons/date-icon";

import styles from "./event-item.module.css";

export const EventItem = (props) => {
  const { eventItem } = props;

  const humanReadableDate = new Date(eventItem.date).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const formattedAddress = eventItem.location.replace(", ", "\n");
  const exploreLink = `/events/${eventItem.id}`;

  return (
    <li className={styles.item}>
      <img src={`/${eventItem.image}`} alt="" />

      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{eventItem.title}</h2>

          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>

          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
