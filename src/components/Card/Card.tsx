import style from "./Card.module.css";

const Card = () => {
  return (
    <div className={style.container}>
      <img src="./card-1.png" />
      <div className={style.text_container}>
        <h2>Montain</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora .
        </p>
      </div>

      <div className={style.button_container}>
        <button>Read More</button>
      </div>
    </div>
  );
};

export { Card };
