import React from 'react';
import { Dispatch } from './State';
import { styled } from './styled';

type Props = {
  dispatch: Dispatch;
};

export function Toolbar(props: Props) {
  return (
    <ToolbarContainer>
      <ToolbarButton onClick={() => props.dispatch({ type: 'add-rect' })}>
        Rect
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

const ToolbarButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
`;
