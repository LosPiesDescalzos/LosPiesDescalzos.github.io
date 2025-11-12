import React, { useEffect } from "react";
// import cn from "classnames";
import styles from "./desserts.module.scss";
import { RecipeRow } from "../../components/recipe-row";
import { desserts } from "../../helpers/data";

const Desserts = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles["page-title"]}>сладенькое</div>
      <div className={styles.recipes}>
        {Object.keys(desserts).map((recipeName) => (
          <RecipeRow key={recipeName} name={recipeName} />
        ))}
      </div>
    </div>
  );
};

export default Desserts;
