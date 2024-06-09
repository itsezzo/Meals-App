import { View, Text, StyleSheet, Pressable, Platform} from 'react-native';


export default function Card({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}> 
      <Pressable android_ripple={{color: '#ccc'}} onPress={onPress} style={({pressed}) => [styles.button, pressed ? styles.buttonIOS : null]}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius:8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonIOS: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});
