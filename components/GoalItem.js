import { Pressable, StyleSheet, Text } from "react-native";

export function GoalItem(props) {
  return (
    <Pressable onPress={props.pressItem.bind(this, props.item.key)}>
      <Text style={styles.goalItem}>{props.item.data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
