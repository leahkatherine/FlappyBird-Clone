import React from "react";
import { View } from "react-native";
import Matter from "matter-js";
import { useEntity } from "../../hooks/useEntity";

const Floor = ({ color, body }) => {
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

export default (world, color, pos, size) => {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: "Floor",
      isStatic: true,
    }
  );
  Matter.World.add(world, initialFloor);

  return {
    body: initialFloor,
    color,
    pos,
    renderer: <Floor />,
  };
};
