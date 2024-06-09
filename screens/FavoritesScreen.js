import { useContext } from "react";
import { Text } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";

import { MEALS } from "../data/dummy-data";

import MealsList from "../components/MealsList";

export default function FavoritesScreen() {
    const favoriteMeals = useContext(FavoritesContext);
    
    const meals = MEALS.filter(meal => favoriteMeals.ids.includes(meal.id));

    return(
        <MealsList items={meals} />
    );    
}