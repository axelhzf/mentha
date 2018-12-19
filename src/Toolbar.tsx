import React from 'react';
import { Dispatch, Tool } from './State';
import { styled } from './styled';
import { RectangleIcon } from './icons/RectangleIcon';

type Props = {
  activeTool: Tool | null;
  dispatch: Dispatch;
};

export function Toolbar(props: Props) {
  function toggleTool(tool: Tool) {
    if (props.activeTool === tool) {
      props.dispatch({ type: 'set-tool', tool: null });
    } else {
      props.dispatch({ type: 'set-tool', tool });
    }
  }
  return (
    <ToolbarContainer>
      <ToolbarButton
        onClick={() => toggleTool(Tool.rectangle)}
        active={props.activeTool === Tool.rectangle}
      >
        <RectangleIcon />
      </ToolbarButton>
    </ToolbarContainer>
  );
}

const ToolbarContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 10px;
  background: #282c34;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

const ToolbarButton = styled.button<{ active?: boolean }>`
  background: ${props => (props.active ? '#545d6d' : 'none')}
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  padding: 4px;
  
  &:hover {
    background: #545d6d;
  }
`;
