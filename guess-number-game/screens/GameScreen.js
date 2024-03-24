import { View, Text, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <>
      <Text>Opponent's Guess</Text>
      {/*GUESS*/}
      <View style={styles.screen}>
        <Text>Higher Or Lower</Text>
        {/*+*/}
        {/*-*/}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});

export default GameScreen;
