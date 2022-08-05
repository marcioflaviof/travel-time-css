import { Card } from "../../components/Card/Card";

import styles from "./VisitPlaces.module.css";

const VisitPlaces = () => {
  return (
    <div className={styles.container}>
      <img className={styles.background_image} src="./montain-background.png" />
      <div className={styles.title_container}>
        <h1>Where do you want to go</h1>
      </div>
      <div className={styles.card_container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export { VisitPlaces };
