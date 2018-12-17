import { uuid } from './uuid';
import { VisualObject, VisualObjectRect } from './VisualObjects';
import produce from 'immer';
import { Rectangle } from './geometry';

export enum Tool {
  rectangle = 'reactangle'
}

export type State = {
  activeTool: Tool | null;
  visualObjects: VisualObject[];
};

export type Dispatch = (action: Action) => void;

type AddRectAction = { type: 'add-rect'; rectangle: Rectangle };
type SetToolAction = { type: 'set-tool'; tool: Tool | null };

export type Action = AddRectAction | SetToolAction;

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'add-rect': {
      const newRect: VisualObjectRect = {
        type: 'rect',
        id: uuid(),
        ...action.rectangle
      };
      return produce(state, s => {
        s.visualObjects.push(newRect);
      });
    }
    case 'set-tool': {
      return produce(state, s => {
        s.activeTool = action.tool;
      });
    }
  }
  return state;
}
