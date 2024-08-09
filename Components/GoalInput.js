import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function goalInput(props) {
  const [enteredText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder='Your goal!'
      onChangeText={goalInputHandler}
      value={enteredText}
    />
    <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  )
};

export default goalInput;

const styles = StyleSheet.create({
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
})
