import { useEffect } from "react";
// import cn from "classnames";
import styles from "./soups.module.css";
import { RecipeRow } from "../../components/recipe-row";
import { soups } from "../../helpers/data";

const Soups = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles["page-title"]}>супы</div>
      <div className={styles.recipes}>
        {Object.keys(soups).map((recipeName) => (
          <RecipeRow key={recipeName} name={recipeName} />
        ))}
      </div>
    </div>
  );
};

export default Soups;
