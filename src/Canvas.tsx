import React from "react";
import styled from "styled-components/macro";

export function Canvas(props: { children: React.ReactNode }) {
  return <Container>{props.children}</Container>;
}

const Container = styled.svg`
  top: 0px;
  user-select: none;
  background-color: rgb(240, 244, 247);
  width: 100%;
  cursor: default;
  padding: 0px;
  position: absolute;
  height: 100%;
  left: 0px;
  margin: 0px;
`;
