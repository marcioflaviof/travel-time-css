import styles from "./nav.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home_section" className={styles.link_border}>
            Home
          </a>
        </li>
        <li>
          <a href="#about_us" className={styles.link_border}>
            About Us
          </a>
        </li>
        <li>
          <a href="#tours_section" className={styles.link_border}>
            Tours
          </a>
        </li>
        <li>
          <a className={styles.link_border}>Gallery</a>
        </li>
        <li>
          <a className={styles.link_border}>Reviews</a>
        </li>
        <li>
          <a className={styles.link_border}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
