import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div id="about_us" className={styles.container}>
      <div className={styles.background_img} />
      <div className={styles.title_container}>
        <h2>About US</h2>
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
