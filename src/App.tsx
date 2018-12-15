import React from "react";

import { Canvas } from "./Canvas";
import { NavBar } from "./NavBar";
import { Rect } from "./Rect";
import { GlobalStyle } from "./styled";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Canvas>
        <Rect x={200} y={200} width={200} height={200} />
        <Rect x={700} y={200} width={50} height={50} />
      </Canvas>
      <NavBar />
    </>
  );
}
