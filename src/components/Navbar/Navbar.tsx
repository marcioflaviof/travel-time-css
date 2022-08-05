import styles from "./nav.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a className={styles.link_border}>Home</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Tours</a>
        </li>
        <li>
          <a>Gallery</a>
        </li>
        <li>
          <a>Reviews</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
