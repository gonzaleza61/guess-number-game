import { View, Text, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <>
      <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        {/*GUESS*/}
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
    padding: 24,
  },
});

export default GameScreen;
