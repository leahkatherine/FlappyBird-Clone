import { Text } from "react-native";

export const ScoreLabel = ({ currentPoints }) => {
  return (
    <Text
      style={{
        textAlign: "center",
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
        margin: 20,
        zIndex: 999,
      }}
    >
      {currentPoints}
    </Text>
  );
};
