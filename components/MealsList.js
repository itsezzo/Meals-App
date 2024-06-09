import { StyleSheet, View ,FlatList } from "react-native";

import MealItem from "../components/MealItem";

export default function MealsList({items}) {
    
    function renderMeal(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }

        return <MealItem {...mealItemProps}  />
    } 

    return(
        <View style={styles.container}>
            <FlatList data={items} renderItem={renderMeal} keyExtractor={meal => meal.id} />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})