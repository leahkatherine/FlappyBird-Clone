import React from "react";
import { View } from "react-native";
import Matter from "matter-js";
import { useEntity } from "../../hooks/useEntity";

const Obstacle = ({ color, body }) => {
  const { getDimmensions } = useEntity();

  const { widthBody, heightBody, xBody, yBody } = getDimmensions(body);

  return (
    <View
      style={{
        backgroundColor: color,
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};

export default (world, label, color, pos, size) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label,
      isStatic: true,
    }
  );
  Matter.World.add(world, initialObstacle);

  return {
    body: initialObstacle,
    color,
    pos,
    renderer: <Obstacle />,
  };
};
