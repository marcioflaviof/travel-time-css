import styles from "./HomePresentation.module.css";

const HomePresentation = () => {
  return (
    <div className={styles.text_container}>
      <h1 className={styles.title}>Travel Time</h1>
      <p className={styles.text}>
        let's travel with us we will start a new adventure together with a full
        of happiness and laughs
      </p>
    </div>
  );
};

export { HomePresentation };
