import React from 'react';
import { Canvas } from './Canvas';
import { NavBar } from './NavBar';
import { Rect } from './Rect';
import { Action, reducer, State, Tool } from './State';
import { GlobalStyle } from './styled';
import { Toolbar } from './Toolbar';
import { RectangleCreator } from './RectangleCreator';

const initialState: State = {
  activeTool: null,
  visualObjects: []
};

export function App() {
  const [state, dispatch] = React.useReducer<State, Action>(
    reducer,
    initialState
  );
  return (
    <>
      <GlobalStyle />
      <Canvas>
        {state.visualObjects.map(vo => (
          <Rect
            id={vo.id}
            key={vo.id}
            x={vo.x}
            y={vo.y}
            width={vo.width}
            height={vo.height}
          />
        ))}
        {state.activeTool === Tool.rectangle && (
          <RectangleCreator dispatch={dispatch} />
        )}
      </Canvas>
      <Toolbar dispatch={dispatch} activeTool={state.activeTool} />
      <NavBar />
    </>
  );
}
