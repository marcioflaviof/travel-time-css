import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.background_image}
        src="./about-us.png"
        alt="background-image"
      />

      <div className={styles.title_container}>
        <h1>About US</h1>
      </div>

      <p className={styles.text_container}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
        urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
        aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
        condimentum lobortis.
      </p>
    </div>
  );
};

export { AboutUs };
