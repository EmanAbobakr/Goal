import React from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalVisibilty] = React.useState(true);
  const [goals, setGoalsList] = React.useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setGoalsList(() => [
      ...goals,
      { data: enteredGoalText, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (deletedItemId) => {
    setGoalsList(() => goals.filter((item) => item.key !== deletedItemId));
  };

  const startAddGoalHandler = () => {
    setModalVisibilty(true);
  };

  const endAddGoalHandler = () => {
    setModalVisibilty(false);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        onPress={startAddGoalHandler}
        color="#237c94"
      />
      <GoalInput
        isVisible={modalIsVisible}
        onAdd={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem item={itemData.item} pressItem={deleteGoalHandler} />
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
  goalsContainer: {
    flex: 5,
    padding: 8,
  },
});
