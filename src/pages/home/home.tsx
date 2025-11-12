import { useEffect } from "react";
import cn from "classnames";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className={cn(styles.home)}>
      <div className={styles.main}>
        <div className={styles.title}>рецептики</div>
        <div className={styles.subtitle}>главный ингредиент - любовь</div>
      </div>

      <div className={styles["home-buttons"]}>
        <div
          style={{ backgroundColor: "#7E9794" }}
          className={styles["home-button"]}
          onClick={() => navigate("/breakfast")}
        >
          <div className={styles["marquee-wrapper"]}>
            <div className={styles["marquee"]}>
              завтраки завтраки завтраки завтраки завтраки&nbsp;
            </div>
            <div className={styles["marquee"]} aria-hidden="true">
              завтраки завтраки завтраки завтраки завтраки
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#E0BB72", paddingLeft: "150px" }}
          className={styles["home-button"]}
          onClick={() => navigate("/soups")}
        >
          супы
        </div>
        <div
          style={{ backgroundColor: "#7C7458", paddingLeft: "250px" }}
          className={styles["home-button"]}
          onClick={() => navigate("/salads")}
        >
          салаты
        </div>
        <div
          style={{ backgroundColor: "#854628", paddingLeft: "350px" }}
          className={styles["home-button"]}
          onClick={() => navigate("/pastas")}
        >
          пасты
        </div>
        <div
          style={{ backgroundColor: "#7E9794", paddingLeft: "450px" }}
          className={styles["home-button"]}
          onClick={() => navigate("/snacks")}
        >
          перекусы
        </div>
      </div>
    </div>
  );
};

export default Home;
