import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497',
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4
    },
    text: {
        textAlign: "center",
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold'
    }
})