class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordablitiy,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isBegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordablitiy = affordablitiy;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isBegetarian = isBegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
