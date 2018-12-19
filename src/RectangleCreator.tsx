import React from 'react';
import { uuid } from './uuid';
import { Rect } from './Rect';
import { useImmer } from './useImmer';
import { Dispatch } from './State';
import { Point } from './geometry';

type State = {
  mousePosition?: Point;
};

function getPoint(e: MouseEvent) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}

const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 100;

export function RectangleCreator(props: { dispatch: Dispatch }) {
  const id = React.useMemo(() => uuid(), []);
  const [state, setState] = useImmer<State>({});

  function moveListener(e: MouseEvent) {
    setState(s => {
      s.mousePosition = getPoint(e);
    });
  }

  function clickListener(e: MouseEvent) {
    const point = getPoint(e);
    props.dispatch({
      type: 'add-rect',
      rectangle: {
        x: point.x,
        y: point.y,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
      }
    });
    props.dispatch({ type: 'set-tool', tool: null });
  }

  React.useEffect(() => {
    document.addEventListener('mousemove', moveListener);
    document.addEventListener('click', clickListener);
    return () => {
      document.removeEventListener('mousemove', moveListener);
      document.removeEventListener('click', clickListener);
    };
  });

  if (!state.mousePosition) return null;
  return (
    <Rect
      id={id}
      x={state.mousePosition.x}
      y={state.mousePosition.y}
      width={DEFAULT_WIDTH}
      height={DEFAULT_HEIGHT}
    />
  );
}
