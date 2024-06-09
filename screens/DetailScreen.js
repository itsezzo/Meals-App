import { useLayoutEffect, useContext } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

import { FavoritesContext } from '../store/context/favorites-context';

import MealDetail from '../components/MealDetail';
import Subtitle from '../components/Subtitle';
import List from '../components/List';

import { MEALS } from '../data/dummy-data';
import IconButton from '../components/IconButton';

export default function DetailScreen({ route, navigation }) {
  const favoriteMeals = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorite = favoriteMeals.ids.includes(mealId);

  function hadleHeaderButton() {
    if (!mealIsFavorite) {
      favoriteMeals.addFavorite(mealId);
    } else {
      favoriteMeals.removeFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            name={mealIsFavorite ? 'star' : 'star-outline'}
            onPress={hadleHeaderButton}
          />
        );
      },
    });
  }, [navigation, hadleHeaderButton]);

  return (
    <ScrollView style={styles.scroll}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailsText}
      />
      <View style={styles.listOutterContainter}>
        <View style={styles.listContainter}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    margin: 8,
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsText: {
    color: '#fff',
  },
  listOutterContainter: {
    alignItems: 'center',
  },
  listContainter: {
    width: '80%',
  },
});
