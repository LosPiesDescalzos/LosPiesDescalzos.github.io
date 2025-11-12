import { FC } from "react";
import cn from "classnames";

import { getRecipe } from "../../helpers/data";

import IRecipeRow from "./recipe-row.interface";
import styles from "./recipe-row.module.css";
import { useNavigate } from "react-router-dom";

const RecipeRow: FC<IRecipeRow> = ({ name }) => {
  const navigate = useNavigate();
  const recipe = getRecipe(name);
  if (!recipe) return <div>Рецепт не найден</div>;

  const handleClick = () => {
    navigate(`/breakfast/${name}`);
  };

  return (
    <div className={cn(styles.recipe)} onClick={handleClick}>
      <div className={styles.title}>
        <div className={styles.name}>{recipe.name}</div>
        <div className={styles.difficulties}>
          {Array.from({ length: recipe.difficulty }).map((_, index) => (
            <div key={index} className={styles.difficulty} />
          ))}
        </div>
      </div>
      <div className={styles.description}>
        {recipe.description.toLowerCase()}
      </div>
    </div>
  );
};

export default RecipeRow;
