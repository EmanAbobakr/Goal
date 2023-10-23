import { StyleSheet, Text } from "react-native";

export function GoalItem(props) {
  return <Text style={styles.goalItem}>{props.text}</Text>;
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
