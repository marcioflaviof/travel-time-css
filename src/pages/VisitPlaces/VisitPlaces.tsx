import { Card } from "../../components/Card/Card";

import styles from "./VisitPlaces.module.css";

const VisitPlaces = () => {
  return (
    <div id="tours_section" className={styles.container}>
      <div className={styles.background_img} />
      <div className={styles.title_container}>
        <h2>Where do you want to go</h2>
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
