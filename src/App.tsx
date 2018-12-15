import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import { Canvas } from "./Canvas";
import { NavBar } from "./NavBar";
import { Rect } from "./Rect";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Canvas>
            <Rect x={200} y={200} width={200} height={200} />
            <Rect x={700} y={200} width={50} height={50} />
          </Canvas>
          <NavBar />
        </Container>
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;

const Container = styled.div`
  text-align: center;
`;

export default App;
