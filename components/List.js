import { StyleSheet, Text, View } from 'react-native';

export default function List({ data }) {
  return data.map((dataPoint, index) => (
    <View key={index} style={styles.container}>
      <Text style={styles.text}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#e2b497'
  },
  text: {
    textAlign: 'center',
    color: '#351400'
  },
});
