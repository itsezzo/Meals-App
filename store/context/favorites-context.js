import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: id => {},
    removeFavorite: id => {}
});


export default function FavoritesContextProvider({children}) {
    const [mealId, setMealId] = useState([]);
    
    function addFavorite(id) {
        setMealId(prevMealsList => [...prevMealsList, id]);
    }

    function removeFavorite(id) {
        setMealId(prevMealsList => prevMealsList.filter(mealId => mealId !== id))
    }

    const value = {
        ids: mealId,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return(
        <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    );
}

