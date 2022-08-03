import { HomePresentation } from "../components/HomePresentation/HomePresentation";
import { Navbar } from "../components/Navbar/Navbar";

import "./home.modules.css";

const Homepage = () => {
  return (
    <div className="container">
      <Navbar />
      <HomePresentation />
      <div className="button-container">
        <button>Join</button>
      </div>
    </div>
  );
};

export { Homepage };
