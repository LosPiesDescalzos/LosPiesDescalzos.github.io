import { useEffect } from "react";
// import cn from "classnames";
import styles from "./salads.module.css";
import { RecipeRow } from "../../components/recipe-row";
import { salads } from "../../helpers/data";

const Salads = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles["page-title"]}>салаты</div>
      <div className={styles.recipes}>
        {Object.keys(salads).map((recipeName) => (
          <RecipeRow key={recipeName} name={recipeName} />
        ))}
      </div>
    </div>
  );
};

export default Salads;
