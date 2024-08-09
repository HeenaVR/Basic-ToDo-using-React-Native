
import { useState } from "react";
import { StyleSheet,
         View,
         FlatList,
         Button} from 'react-native';
import { StatusBar } from "expo-status-bar";

import GoalItem from "./Components/GoalItem"; // In JSX, we wants to be clear taht this is custom components so it's starting with capital letter
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  // setCourseGoals - updating function

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredText) {
    setCourseGoals( (currentCourseGoals) => [
      ...currentCourseGoals,
      // { text: enteredText, key: Math.random().toString() }
      { text: enteredText, id: Math.random().toString() } // we need to use keyExtractor for this
      // enteredText
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title="Add New Goal"
              color="#a065ec"
              onPress={startAddGoalHandler}
      />
      <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
      />
      <View style={ styles.goalsContainer }>
        <FlatList
          data={courseGoals}
          renderItem={ (itemData) => {
            return <GoalItem
                      text={itemData.item.text}
                      id={itemData.item.id}
                      onDeleteItem={deleteGoalHandler}
                   />
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 75,
    paddingHorizontal: 22,
    flex: 1,
  },
  goalsContainer: {
    flex: 5
  }
});
