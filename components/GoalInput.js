import React from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export function GoalInput(props) {
  const [text, setChangeText] = React.useState("");
  const onChangeTxt = (txt) => {
    setChangeText(txt);
  };

  const addGoalHandler = (enteredGoalText) => {
    props.onAdd(text);
    setChangeText("");
  };

  return (
    <Modal visible={props.isVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal"
          style={styles.input}
          onChangeText={onChangeTxt}
          value={text}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#237c94" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#FF0000" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingTop: 16,
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
});
