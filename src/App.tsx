import React from 'react';
import { Canvas } from './Canvas';
import { NavBar } from './NavBar';
import { Rect } from './Rect';
import { Action, reducer, State } from './State';
import { GlobalStyle } from './styled';
import { Toolbar } from './Toolbar';

const initialState: State = {
  visualObjects: [
    { id: '1', type: 'rect', x: 200, y: 200, width: 200, height: 200 },
    { id: '2', type: 'rect', x: 700, y: 200, width: 50, height: 50 }
  ]
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
            key={vo.id}
            x={vo.x}
            y={vo.y}
            width={vo.width}
            height={vo.height}
          />
        ))}
      </Canvas>
      <Toolbar dispatch={dispatch} />
      <NavBar />
    </>
  );
}
