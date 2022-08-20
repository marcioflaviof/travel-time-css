import { HomePresentation } from "../../components/HomePresentation/HomePresentation";
import { Navbar } from "../../components/Navbar/Navbar";

import styles from "./Home.module.css";

const Homepage = () => {
  return (
    <div id="home_section" className={styles.container}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <HomePresentation />
      <div className={styles.button_container}>
        <button className={styles.button}>Join</button>
      </div>
    </div>
  );
};

export { Homepage };
