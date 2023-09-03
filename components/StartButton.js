import { View, Text, TouchableOpacity } from "react-native";

export const StartButton = ({ isRunning, startGame }) => {
  if (isRunning) return null;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          paddingHorizontal: 30,
          paddingVertical: 10,
        }}
        onPress={startGame}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "pink", fontSize: 30 }}>
            Tap to Start
          </Text>
          <Text style={{ fontWeight: "bold", color: "pink", fontSize: 30 }}>
            Flappy Dragon
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
