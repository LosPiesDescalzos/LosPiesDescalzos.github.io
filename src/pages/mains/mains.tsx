import { useEffect } from "react";
// import cn from "classnames";
import styles from "./mains.module.scss";
import { RecipeRow } from "../../components/recipe-row";
import { mains } from "../../helpers/data";

const Mains = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles["page-title"]}>основной курс</div>
      <div className={styles.recipes}>
        {Object.keys(mains).map((recipeName) => (
          <RecipeRow key={recipeName} name={recipeName} />
        ))}
      </div>
    </div>
  );
};

export default Mains;
