import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <>
      <View style={styles.screen}>
        {/*GUESS*/}
        <Title title="Opponent's Guess" />
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
