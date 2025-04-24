import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const NoteScreen = () => {
    const [notes, setNotes] = useState([
        {id: "1", text: "Note One"},
        {id: "2", text: "Note Two"},
        {id: "3", text: "Note Three"},
        // {id: "4", text: "Note Four"},
        // {id: "5", text: "Note Five"}
    ]);
    return( <View style={styles.container}>
          <FlatList 
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.noteItem}>
                <Text style={styles.noteText}> {item.text} </Text>
            </View>
          )}
          />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    noteItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 5,
        marginVertical: 5
    },
    noteText: {
        fontSize: 16,
    }
})

export default NoteScreen;