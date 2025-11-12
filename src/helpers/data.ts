import { IRecipeData } from "../types";

const recipeModules = import.meta.glob('../resipes-data/*.json', { eager: true });

export const breakfast = {
  sovietSandwiches: recipeModules['../resipes-data/soviet-sandwiches.json'],
  milkPorridge: recipeModules['../resipes-data/milk-porridge.json'],
  bliny: recipeModules['../resipes-data/bliny.json'],
  croissants: recipeModules['../resipes-data/croissants.json'],
  draniki: recipeModules['../resipes-data/draniki.json'],
  eggs: recipeModules['../resipes-data/eggs.json'],
  lavashEnvelopes: recipeModules['../resipes-data/lavash-envelopes.json'],
  lepeshkaOmlette: recipeModules['../resipes-data/lepeshka-omlette.json'], 
  lepeshkaMeet: recipeModules['../resipes-data/lepeshka-meet.json'],
  omeletteInOven: recipeModules['../resipes-data/omelette-in-oven.json'],
  pancakesCarbonadeChesse: recipeModules['../resipes-data/pancakes-carbonade-cheese.json'],
  syrniki: recipeModules['../resipes-data/syrniki.json'],
  shaksuka: recipeModules['../resipes-data/shaksuka.json'],
  shawarma: recipeModules['../resipes-data/shawarma.json'],
  salad: recipeModules['../resipes-data/salad.json'],
  gaufres: recipeModules['../resipes-data/gaufres.json'],
  fishFingers: recipeModules['../resipes-data/fish-fingers.json'],
  bowl: recipeModules['../resipes-data/bowl.json'],
  tunaSandwiches: recipeModules['../resipes-data/tuna-sandwiches.json'],
};

export const desserts = {
  
}
export const mains = {
  
}
export const salads = {
  homeSalad: recipeModules['../resipes-data/home-salad.json'],
  greekSalad: recipeModules['../resipes-data/greek-salad.json'],
  tiffanySalad: recipeModules['../resipes-data/tiffany-salad.json'],
  pinappleSalad: recipeModules['../resipes-data/pinapple-salad.json'],
  caesarSalad: recipeModules['../resipes-data/caesar-salad.json'],
  beefSalad: recipeModules['../resipes-data/beef-salad.json'],
  ministerialSalad: recipeModules['../resipes-data/ministerial-salad.json'],
  snowSalad: recipeModules['../resipes-data/snow-salad.json'],
  lusaSalad: recipeModules['../resipes-data/lusa-salad.json'],
  coleSlawSalad: recipeModules['../resipes-data/cole-slaw-salad.json'],
  funchoseSalad: recipeModules['../resipes-data/funchose-salad.json'],
  celerySalad: recipeModules['../resipes-data/celery-salad.json'],
  crabSalad: recipeModules['../resipes-data/crab-salad.json'],
  persimmonSalad: recipeModules['../resipes-data/persimmon-salad.json'],
  mangoSalad: recipeModules['../resipes-data/mango-salad.json'],
  bakuSalad: recipeModules['../resipes-data/baku-salad.json'],
  vinegretSalad: recipeModules['../resipes-data/vinegret-salad.json'],
}
export const snacks = {
  // намазкка из перцев печеных
}
export const soups = {

}

export const pastas = {
  carbonara: recipeModules['../resipes-data/carbonara.json'],
};


export const recipes = {
  ...breakfast,
  ...desserts,
  ...mains,
  ...pastas,
  ...salads, 
  ...snacks,
  ...soups,
};


export const getRecipe= (name: string) => {
  return recipes[name as keyof typeof recipes] as IRecipeData;
};