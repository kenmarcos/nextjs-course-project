import styles from "./event-content.module.css";

export const EventContent = (props) => {
  return <section className={styles.content}>{props.children}</section>;
};
