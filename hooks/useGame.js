import { useState, useEffect } from "react";
import { entitites } from "../components";
import { physics } from "../utils";

export const useGame = () => {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  const entities = entitites();

  const handleRuntime = () => {
    if (running) {
      gameEngine.stop();
    } else {
      gameEngine.start();
    }
    setRunning(!running);
  };

  const handleUpdateCurrentPoints = (e) => {
    switch (e.type) {
      case "game_over":
        setRunning(false);
        gameEngine.stop();
        setCurrentPoints(0);
        break;
      case "new_point":
        setCurrentPoints(currentPoints + 1);
        break;
    }
  };

  const handleSetGameEngine = (ref) => {
    setGameEngine(ref);
  };

  const startGame = () => {
    setCurrentPoints(0);
    setRunning(true);
    gameEngine.swap(entities);
  };

  const systems = [physics];
  return {
    running,
    gameEngine,
    currentPoints,
    handleUpdateCurrentPoints,
    handleRuntime,
    handleSetGameEngine,
    startGame,
    entities,
    systems,
  };
};
