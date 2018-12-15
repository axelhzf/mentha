import React from "react";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function Rect(props: Props) {
  return (
    <rect
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      rx="3"
      ry="3"
      fill="#FFFFFF"
    />
  );
}
