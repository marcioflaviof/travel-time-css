import { HomePresentation } from "../../components/HomePresentation/HomePresentation";
import { Navbar } from "../../components/Navbar/Navbar";

import styles from "./Home.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.homepage_image} src="./homepage-img.png" />
      <Navbar />
      <HomePresentation />
      <div className={styles.button_container}>
        <button>Join</button>
      </div>
    </div>
  );
};

export { Homepage };
