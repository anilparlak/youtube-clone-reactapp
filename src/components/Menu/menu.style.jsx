import styled from "styled-components";
import { tablet } from "../../utils/responsive";

export const MenuContainer = styled.div`
  flex:${({menuOpen}) => menuOpen ? "1" : "0.4"};
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  padding: 10px 0 0;
  position: sticky;
  top: 56px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  ${tablet({overflowY:"inherit",maxWidth:"75px",height:"auto"})}
`;

export const MenuItem = styled.div`
  padding: 0 24px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s;

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
export const MenuText = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 0 25px;
  display: ${({menuOpen}) => menuOpen ? "block" : "none"};
  ${tablet({display:"none"})}
`;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.soft};
  margin: 10px 0;
`;
export const SignIn = styled.span`
  display: block;
  padding: 0 24px;
`;
export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  text-transform: uppercase;
  padding: 8px 24px;
  letter-spacing: 0.5px;

  ${tablet({display:"none"})}
`;
