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
        Add Rect
      </ToolbarButton>
    </ToolbarContainer>
  );
}

const ToolbarContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
`;

const ToolbarButton = styled.button``;
