import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  display: flex;
  align-items: center;

  &.active {
    color: white;
    background-color: #4b0082;
  }
`;
