import TooltipTrigger, { TooltipProps } from 'react-popper-tooltip';
import React from 'react';
import styled from 'styled-components';

export function ToolbarButton(props: {
  onClick?: () => void;
  active?: boolean;
  children: React.ReactNode;
  tooltip: React.ReactNode;
}) {
  return (
    <TooltipTrigger
      placement="right"
      trigger="hover"
      tooltip={(tooltipProps: TooltipProps) => (
        <ToolbarButtonTooltip {...tooltipProps}>
          {props.tooltip}
        </ToolbarButtonTooltip>
      )}
      onVisibilityChange={() => {
        /* tslint:disable-next-line:no-empty */
      }}
    >
      {({ getTriggerProps, triggerRef }) => (
        <ToolbarButtonContainer
          {...getTriggerProps({ ref: triggerRef })}
          active={props.active}
          onClick={props.onClick}
        >
          {props.children}
        </ToolbarButtonContainer>
      )}
    </TooltipTrigger>
  );
}

function ToolbarButtonTooltip(
  props: TooltipProps & { children: React.ReactNode }
) {
  return (
    <TooltipContainer
      {...props.getTooltipProps({
        ref: props.tooltipRef
        /* your props here */
      })}
    >
      <TooltipArrow
        {...props.getArrowProps({
          ref: props.arrowRef,
          'data-placement': props.placement,
          className: 'tooltip-arrow'
          /* your props here */
        })}
      />
      {props.children}
    </TooltipContainer>
  );
}

const ToolbarButtonContainer = styled.button<{ active?: boolean }>`
  background: ${props => (props.active ? '#545d6d' : 'none')}
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  padding: 4px;
  outline: none;
  
  &:hover {
    background: #545d6d;
  }
`;
const TooltipContainer = styled.div`
  background-color: #282c33;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0.4rem;
  padding: 0.4rem;
  z-index: 999;
  font-size: 13px;
  color: #fff;
`;
const TooltipArrow = styled.div`
  height: 1rem;
  position: absolute;
  width: 1rem;

  &::before {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    width: 0;
  }

  &::after {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    position: absolute;
    width: 0;
  }

  &[data-placement*='bottom'] {
    height: 1rem;
    left: 0;
    margin-top: -0.4rem;
    top: 0;
    width: 1rem;
  }

  &[data-placement*='bottom']::before {
    border-color: transparent transparent #282c33 transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
    position: absolute;
    top: -1px;
  }

  &[data-placement*='bottom']::after {
    border-color: transparent transparent #282c33 transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
  }

  &[data-placement*='top'] {
    bottom: 0;
    height: 1rem;
    left: 0;
    margin-bottom: -1rem;
    width: 1rem;
  }

  &[data-placement*='top']::before {
    border-color: #282c33 transparent transparent transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
    position: absolute;
    top: 1px;
  }

  &[data-placement*='top']::after {
    border-color: #282c33 transparent transparent transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
  }

  &[data-placement*='right'] {
    height: 1rem;
    left: 0;
    margin-left: -0.7rem;
    width: 1rem;
  }

  &[data-placement*='right']::before {
    border-color: transparent #282c33 transparent transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
  }

  &[data-placement*='right']::after {
    border-color: transparent #282c33 transparent transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
    left: 6px;
    top: 0;
  }

  &[data-placement*='left'] {
    height: 1rem;
    margin-right: -0.7rem;
    right: 0;
    width: 1rem;
  }

  &[data-placement*='left']::before {
    border-color: transparent transparent transparent #282c33;
    border-width: 0.5rem 0 0.5rem 0.4em;
  }

  &[data-placement*='left']::after {
    border-color: transparent transparent transparent #282c33;
    border-width: 0.5rem 0 0.5rem 0.4em;
    left: 4px;
    top: 0;
  }
`;
