import React from "react";
import { ImageBackground } from "react-native";
import Matter from "matter-js";
import { useEntity } from "../../hooks/useEntity";


const Dragon = ({ body }) => {
  const { getDimmensions } = useEntity();

  const { widthBody, heightBody, xBody, yBody } = getDimmensions(body);

  return (
    <ImageBackground
      source={require("../../assets/dragon.png")}
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
    { label: "Dragon" } // Changed label from 'Bird' to 'Dragon'
  );
  Matter.World.add(world, initialDragon);

  return {
    body: initialDragon,
    color,
    pos,
    renderer: <Dragon />, // Changed renderer from <Bird /> to <Dragon />
  };
};
