import { HomePresentation } from "../../components/HomePresentation/HomePresentation";
import { Navbar } from "../../components/Navbar/Navbar";

import styles from "./Home.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <HomePresentation />
      <div className={styles.button_container}>
        <button>Join</button>
      </div>
    </div>
  );
};

export { Homepage };
