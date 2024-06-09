import { FlatList } from 'react-native';

import Card from '../components/Card';

import { CATEGORIES } from '../data/dummy-data';


export default function Menu({ navigation }) {
    function renderItem(itemData) {
        function handlePress() {
            navigation.navigate('MealsScreen', {categoryId: itemData.item.id});
        };
      return <Card title={itemData.item.title} color={itemData.item.color} onPress={handlePress} />;
    }
    
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}
