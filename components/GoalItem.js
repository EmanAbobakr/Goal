import { Pressable, StyleSheet, Text } from "react-native";

export function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={props.pressItem.bind(this, props.item.key)}
      style={({ pressed }) => pressed && styles.pressableItem}
    >
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
    marginVertical: 4,
    fontSize: 18,
    color: "#ffffff",
    borderRadius: 6,
  },
  goalText: {
    marginVertical: 8,
  },
  pressableItem: {
    opacity: 0.5,
  },
});
