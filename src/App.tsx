import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Homepage } from "./pages/Homepage/Homepage";
import { VisitPlaces } from "./pages/VisitPlaces/VisitPlaces";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Homepage />
      <VisitPlaces />
      <AboutUs />
    </div>
  );
}

export default App;
