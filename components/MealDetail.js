import { View, Text, StyleSheet } from 'react-native';

export default function MealDetail({affordability, complexity, duration, textStyle}) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailedItem, textStyle]}>{duration} mins</Text>
      <Text style={[styles.detailedItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailedItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailedItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
