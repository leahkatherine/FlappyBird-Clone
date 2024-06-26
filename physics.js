import Matter from "matter-js";
import { getPipeSizePosPair } from "./utils/randomLogic";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const setupClickHandler = (entities, dispatch) => {
  const handleClick = () => {
    Matter.Body.setVelocity(entities.Dragon.body, {
      x: 0,
      y: -6,
    });
  };

  window.addEventListener("click", handleClick);

  entities.clickHandler = handleClick;
};

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;
  if (!entities.clickHandler) {
    setupClickHandler(entities, dispatch);
  }

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Dragon.body, {
        x: 0,
        y: -6,
      });
    });

  Matter.Engine.update(engine, time.delta);

  for (let index = 1; index <= 2; index++) {
    if (
      entities[`ObstacleTop${index}`].body.bounds.max.x <= 80 &&
      !entities[`ObstacleTop${index}`].point
    ) {
      entities[`ObstacleTop${index}`].point = true;
      dispatch({ type: "new_point" });
    }

    if (entities[`ObstacleTop${index}`].body.bounds.max.x <= 0) {
      const pipeSizePos = getPipeSizePosPair(windowWidth * 0.9);
      entities[`ObstacleTop${index}`].point = false;

      Matter.Body.setPosition(
        entities[`ObstacleTop${index}`].body,
        pipeSizePos.pipeTop.pos
      );
      Matter.Body.setPosition(
        entities[`ObstacleBottom${index}`].body,
        pipeSizePos.pipeBottom.pos
      );
    }

    Matter.Body.translate(entities[`ObstacleTop${index}`].body, {
      x: -3,
      y: 0,
    });
    Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {
      x: -3,
      y: 0,
    });
  }

  Matter.Events.on(engine, "collisionStart", (event) => {
    dispatch({ type: "game_over" });
  });

  return entities;
};

export default Physics;
