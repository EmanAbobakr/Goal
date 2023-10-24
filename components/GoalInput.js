import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export function GoalInput(props) {
  const [text, setChangeText] = React.useState("");
  const onChangeTxt = (txt) => {
    setChangeText(txt);
  };

  const addGoalHandler = (enteredGoalText) => {
    props.pressBtn(text);
    setChangeText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} onChangeText={onChangeTxt} value={text} />
      <Button title="Add Goal" onPress={addGoalHandler} color="#237c94" />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
