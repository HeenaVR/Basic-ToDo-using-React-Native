import { StyleSheet, View, Text } from "react-native";

function goalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}> {props.text} </Text>
    </View>
  )
};

export default goalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6, // would not work on iOS
    backgroundColor: '#5e0acc',
    lineHeight: 20,
  },
  goalText: {
    color: 'white',
  }
});
