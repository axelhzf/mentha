import React from 'react';
import { Canvas } from './Canvas';
import { NavBar } from './NavBar';
import { Rect } from './Rect';
import { Action, reducer, State } from './State';
import { GlobalStyle } from './styled';
import { Toolbar } from './Toolbar';
import { uuid } from './uuid';

const initialState: State = {
  visualObjects: [
    { id: uuid(), type: 'rect', x: 200, y: 200, width: 200, height: 200 },
    { id: uuid(), type: 'rect', x: 700, y: 200, width: 50, height: 50 }
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
            id={vo.id}
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
