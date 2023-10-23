import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [goals, setGoalsList] = React.useState([]);

  const addGoalHandler = (enteredGoalText) => {
    console.log("pressed btn");
    setGoalsList(() => [
      ...goals,
      { data: enteredGoalText, key: Math.random().toString() },
    ]);
    console.log(goals);
  };

  return (
    <View style={styles.container}>
      <GoalInput pressBtn={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalItem text={itemData.item.data} />}
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
  goalsContainer: {
    flex: 5,
    padding: 8,
  },
});
