import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function IconButton({name, onPress}) {
    return(
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons name={name} size={24} color='#e2b497' style={styles.icon} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.6
    },
    icon: {
        marginRight: 8,
    }
})