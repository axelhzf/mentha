import { random } from 'lodash';
import { uuid } from './uuid';
import { VisualObject, VisualObjectRect } from './VisualObjects';

export type State = {
  visualObjects: VisualObject[];
};

export type Dispatch = (action: Action) => void;

type AddRectAction = { type: 'add-rect' };

export type Action = AddRectAction;

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'add-rect': {
      const newRect: VisualObjectRect = {
        type: 'rect',
        id: uuid(),
        x: random(0, 1000),
        y: random(0, 1000),
        width: random(0, 400),
        height: random(0, 400)
      };
      return { ...state, visualObjects: [...state.visualObjects, newRect] };
    }
  }
  return state;
}
