import { useEffect } from "react";
// import cn from "classnames";
import styles from "./pastas.module.scss";
import { RecipeRow } from "../../components/recipe-row";
import { pastas } from "../../helpers/data";

const Pastas = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles["page-title"]}>пасты</div>
      <div className={styles.recipes}>
        {Object.keys(pastas).map((recipeName) => (
          <RecipeRow key={recipeName} name={recipeName} />
        ))}
      </div>
    </div>
  );
};

export default Pastas;
