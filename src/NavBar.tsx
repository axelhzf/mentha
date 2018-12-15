import React from 'react';
import { styled } from './styled';

export function NavBar() {
  return (
    <NavBarContainer>
      <Logo>Mentha</Logo>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.div`
  position: fixed;
  background: #282c34;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  height: 40px;
  display: flex;
  padding: 0 40px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

const Logo = styled.div`
  font-weight: 100;
`;
