import { useEffect } from "react";
// import cn from "classnames";
import styles from "./snacks.module.css";
import { RecipeRow } from "../../components/recipe-row";
import { snacks } from "../../helpers/data";

const Snacks = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles["page-title"]}>перекусы</div>
      <div className={styles.recipes}>
        {Object.keys(snacks).map((recipeName) => (
          <RecipeRow key={recipeName} name={recipeName} />
        ))}
      </div>
    </div>
  );
};

export default Snacks;
