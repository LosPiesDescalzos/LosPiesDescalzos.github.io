import { useEffect } from "react";
// import cn from "classnames";
import styles from "./breakfast.module.scss";
import { RecipeRow } from "../../components/recipe-row";
import { breakfast } from "../../helpers/data";

const Breakfast = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles["page-title"]}>завтрак</div>
      <div className={styles.recipes}>
        {Object.keys(breakfast).map((recipeName) => (
          <RecipeRow key={recipeName} name={recipeName} />
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
