import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category("c1", "Italian", "#f5428d"),
  new Category("c2", "Quick & Easy", "#f54242"),
  new Category("c3", "Hamburgers", "#f5a442"),
  new Category("c4", "German", "#f5d142"),
  new Category("c5", "Light& Lovely", "#368dff"),
  new Category("c6", "Exotic", "#41d95d"),
  new Category("c7", "Breakfast", "#9eecff"),
  new Category("c8", "Asian", "#b9ffb0"),
  new Category("c9", "French", "#ffc7ff"),
  new Category("c10", "Summer", "#47fced"),
];

export const MEALS = [
  new Meal(
    "m10",
    ["c2", "c5", "c10"],
    "Asparagus Salad with Cherry Tomatoes",
    "luxurious",
    "simple",
    "https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg",
    30,
    [
      "white and Green Asoaragus",
      "30g Pine Nuts",
      "300g Cherry Tomatoes",
      "Salad",
      "salt,Pepper and Olibe Oil",
    ],
    [
      "Wash,peel and cute the asparagus",
      "Cook in salted water",
      "Salt and pepper the asparagus",
      "Roast the pine nuts",
      "halve the tomatoes",
      "mix with asparagus, salsd and dressing",
      "Serve with bagu",
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    "m8",
    ["c8"],
    "Creamy Indian Chic Curry",
    "pricey",
    "chollengin",
    "https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg",
    35,
    [
      "white and Green Asoaragus",
      "30g Pine Nuts",
      "300g Cherry Tomatoes",
      "Salad",
      "salt,Pepper and Olibe Oil",
    ],
    [
      "Wash,peel and cute the asparagus",
      "Cook in salted water",
      "Salt and pepper the asparagus",
      "Roast the pine nuts",
      "halve the tomatoes",
      "mix with asparagus, salsd and dressing",
      "Serve with bagu",
    ],
    true,
    false,
    true,
    false
  ),
];
