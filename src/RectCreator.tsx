import React from 'react';
import { uuid } from './uuid';
import { Rect } from './Rect';
import { useImmer } from './useImmer';
import { Dispatch } from './State';
import { Point, getRectangle } from './geometry';

type State = {
  click?: Point;
  move?: Point;
};

function getPoint(e: MouseEvent) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}

export function RectCreator(props: { dispatch: Dispatch }) {
  const id = React.useMemo(() => uuid(), []);
  const [state, setState] = useImmer<State>({});

  function clickListener(e: MouseEvent) {
    setState(s => {
      const point = getPoint(e);
      if (!s.click) {
        s.click = point;
        s.move = point;
      } else {
        props.dispatch({
          type: 'add-rect',
          rectangle: getRectangle(s.click, point)
        });
        s.click = undefined;
        s.move = undefined;
      }
    });
  }

  function moveListener(e: MouseEvent) {
    setState(s => {
      s.move = getPoint(e);
    });
  }

  React.useEffect(() => {
    document.addEventListener('click', clickListener);
    return () => document.removeEventListener('click', clickListener);
  });

  React.useEffect(() => {
    if (state.click) {
      document.addEventListener('mousemove', moveListener);
      return () => document.removeEventListener('mousemove', moveListener);
    }
  });

  if (!state.click || !state.move) return null;
  return <Rect id={id} {...getRectangle(state.click, state.move)} />;
}
