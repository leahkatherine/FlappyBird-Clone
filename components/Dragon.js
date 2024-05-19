import React from "react";
import { ImageBackground } from "react-native";
import Matter from "matter-js";

const Dragon = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <ImageBackground
      source={require("../assets/dragon.png")}
      style={{
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};

export default (world, color, pos, size) => {
  const initialDragon = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Dragon" }
  );
  Matter.World.add(world, initialDragon);

  return {
    body: initialDragon,
    color,
    pos,
    renderer: <Dragon />,
  };
};
