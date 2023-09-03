import { Game } from "./views/Game";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="auto" hidden={true} />
      <Game />
    </>
  );
}
