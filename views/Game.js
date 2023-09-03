import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Physics from "../utils/physics";
import { useGame } from "../hooks/useGame";
import { StartButton, ScoreLabel } from "../components";


export function Game() {
  const {
    entities,
    running,
    currentPoints,
    handleUpdateCurrentPoints,
    handleSetGameEngine,
    startGame,
    systems,
  } = useGame();

  return (
    <View style={{ flex: 1, backgroundColor: "pink" }}>
      <GameEngine
        ref={(ref) => handleSetGameEngine(ref)}
        systems={systems}
        entities={entities}
        running={running}
        onEvent={(e) => handleUpdateCurrentPoints(e)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <ScoreLabel points={currentPoints} />
      <StartButton startGame={startGame} isRunning={running} />
    </View>
  );
}
