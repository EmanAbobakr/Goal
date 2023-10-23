import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [text, setChangeText] = React.useState("");
  const [goals, setGoalsList] = React.useState([]);

  const onChangeTxt = (txt) => {
    console.log(txt);
    setChangeText(txt);
  };

  const onClickBtn = () => {
    console.log("pressed btn");
    setGoalsList(() => [...goals, { data: text, key: Math.random().toString }]);
    console.log(goals);
    setChangeText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTxt}
          value={text}
        />
        <Button title="Add Goal" onPress={onClickBtn} color="#237c94" />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <Text style={styles.goalItem}>{itemData.item.data}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
  goalsContainer: {
    flex: 5,
    padding: 8,
  },
  goalItem: {
    backgroundColor: "#237c94",
    width: "100%",
    height: 30,
    textAlign: "center",
    marginTop: 8,
    fontSize: 18,
    color: "#ffffff",
    borderRadius: 6,
  },
});
