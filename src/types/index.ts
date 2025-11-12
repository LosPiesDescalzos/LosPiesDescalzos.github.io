export type Category = 'breakfast' | 'desserts'| 'mains'| 'pastas'| 'salads'| 'snacks'| 'soups';

export interface Ingredient {
    name: string;
    amount: string;
}
  
export interface Step {
    step: number;
    instruction: string;
}
  
export interface PreparationTime {
    total: string;
    preparation: string;
    cooking: string;
}
  
export interface IRecipeData {
    name: string;
    description: string;
    preparation_time: PreparationTime;
    money: number;
    difficulty: number;
    ingredients: Ingredient[];
    options: string[];
    steps: Step[];
    tips: string[];
   
}  