import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

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
        <Image
          style={styles.img}
          source={require(`../assets/images/target.png`)}
        />
        <TextInput
          placeholder="Goal"
          placeholderTextColor="#FFFFFF"
          style={styles.input}
          onChangeText={onChangeTxt}
          value={text}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#FF0000" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#237c94" />
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
    backgroundColor: "#0c4b5c",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
    color: "#FFFFFF",
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingTop: 16,
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
  img: {
    height: 100,
    width: 100,
  },
});
