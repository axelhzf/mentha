import React from 'react';
import { Dispatch, Tool } from './State';
import { styled } from './styled';
import { RectangleIcon } from './icons/RectangleIcon';
import { TooltipProps } from 'react-popper-tooltip';
import { ToolbarButton } from './ToolbarButton';

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
        active={props.activeTool === Tool.rectangle}
        tooltip="Add Shape"
        onClick={() => toggleTool(Tool.rectangle)}
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
