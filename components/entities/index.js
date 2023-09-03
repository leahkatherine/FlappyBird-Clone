import Matter from "matter-js";
import Dragon from "./Dragon"; // Changed import name
import Floor from "./Floor";
import Obstacle from "./Obstacle";
import { Dimensions } from "react-native";
import { getPipeSizePosPair } from "../../utils";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const entitites = (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });

  let world = engine.world;

  world.gravity.y = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9);

  return {
    physics: { engine, world },
    Dragon: Dragon(
      world,
      "green",
      { x: 50, y: 200 },
      { height: 40, width: 40 }
    ), // Changed from Bird to Dragon

    ObstacleTop1: Obstacle(
      world,
      "ObstacleTop1",
      "green",
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size
    ),
    ObstacleBottom1: Obstacle(
      world,
      "ObstacleTop1",
      "green",
      pipeSizePosA.pipeBottom.pos,
      pipeSizePosA.pipeBottom.size
    ),

    ObstacleTop2: Obstacle(
      world,
      "ObstacleTop2",
      "green",
      pipeSizePosB.pipeTop.pos,
      pipeSizePosB.pipeTop.size
    ),
    ObstacleBottom2: Obstacle(
      world,
      "ObstacleTop2",
      "green",
      pipeSizePosB.pipeBottom.pos,
      pipeSizePosB.pipeBottom.size
    ),

    Floor: Floor(
      world,
      "green",
      { x: windowWidth / 2, y: windowHeight },
      { height: 50, width: windowWidth }
    ),
  };
};
