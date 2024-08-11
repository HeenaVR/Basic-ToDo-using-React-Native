import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      {/* props.visible - you can provide any name you want */}
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder='Your goal!'
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
              <Button title='Cancel' onPress={props.onCancel} color="#F5004F"/>
          </View>
          <View style={styles.button}>
              <Button title='Add Goal' onPress={addGoalHandler} color="#F9E400" />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default goalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderBlockColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    borderRadius: 6,
    padding: 16,
    color: '#120438'
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})
