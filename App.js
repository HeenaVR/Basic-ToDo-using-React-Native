
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredText, setEnteredGoalText] = useState('');
  // enteredText - user input state
  // setEnteredGoalText - can be updated with this

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    console.log(enteredText);
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
        <Text>List of Goals</Text>
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
