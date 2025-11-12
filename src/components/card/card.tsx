import { FC, useRef, useState } from "react";
import cn from "classnames";

import { getRecipe } from "../../helpers/data";

import ICard from "./card.interface";
import styles from "./card.module.scss";
import { useParams } from "react-router-dom";

const Card: FC<ICard> = () => {
  const { name } = useParams<{ name: string }>();
  const optionRef = useRef(null);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  if (!name) return <div>Рецепт не найден</div>;

  const recipe = getRecipe(name);

  if (!recipe) return <div>Рецепт не найден</div>;

  const handleClickOption = (name: string) => {
    if (name === "тык") setIsOptionsVisible(true);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.recipe)}
        onClick={() => {
          if (isOptionsVisible) setIsOptionsVisible(false);
        }}
      >
        <div>
          <div className={styles.title}>
            <div>{recipe.name}</div>
            <div className={styles.difficulties}>
              {Array.from({ length: recipe.difficulty }).map((_, index) => (
                <div key={index} className={styles.difficulty} />
              ))}
            </div>
          </div>
          <div>{recipe.description}</div>
          <div className={styles.time}>
            <div>активное время: {recipe["preparation_time"].preparation}</div>
            <div>пассивное время: {recipe["preparation_time"].cooking}</div>
            <div>общее время: {recipe["preparation_time"].total}</div>
          </div>
        </div>
        <div className={styles.money}>{recipe.money} рублей</div>

        <div>
          {recipe.ingredients.map((ingredient) => {
            return (
              <div
                className={cn(styles.ingredient, {
                  [styles.clickable]: ingredient.amount === "тык",
                })}
                key={ingredient.name}
                onClick={() => handleClickOption(ingredient.amount)}
              >
                <div className={cn(styles["ingredient-name"])}>
                  {ingredient.name}
                </div>
                <div className={styles["ingredient-amount"]}>
                  {ingredient.amount}
                </div>
              </div>
            );
          })}
        </div>
        {recipe.steps.length > 0 && (
          <div className={styles.steps}>
            <div>Этапы:</div>
            {recipe.steps.map((step) => {
              return (
                <div key={step.step} className={styles.step}>
                  {step.instruction}
                </div>
              );
            })}
          </div>
        )}

        {recipe.tips.length > 0 && (
          <div className={styles.tips}>
            <div>Заметки:</div>
            {recipe.tips.map((tip) => {
              return (
                <div key={tip} className={styles.tip}>
                  {tip}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {isOptionsVisible && recipe.options.length > 0 && (
        <div className={styles.options} ref={optionRef}>
          <div>
            {recipe.options.map((option) => {
              return (
                <div key={option} className={styles.option}>
                  {option}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
