
import { useState } from "react";
import { StyleSheet,
         View,
         Button,
         TextInput,
         FlatList} from 'react-native';

import GoalItem from "./Components/GoalItem"; // In JSX, we wants to be clear taht this is custom components so it's starting with capital letter

export default function App() {

  const [enteredText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  // setEnteredGoalText - can be updated with this
  // setCourseGoals - updating function

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals( (currentCourseGoals) => [
      ...currentCourseGoals,
      // { text: enteredText, key: Math.random().toString() }
      { text: enteredText, id: Math.random().toString() } // we need to use keyExtractor for this
      // enteredText
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your goal!'
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={ styles.goalsContainer }>
        <FlatList
          data={courseGoals}
          renderItem={ (itemData) => {
            return <GoalItem />
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 75,
    paddingHorizontal: 22,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1
  },
  textInput: {
    borderWidth: 1,
    borderBlockColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});
