import styled from "styled-components";
import { tablet } from "../../utils/responsive";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 0 25px;
  color: ${({theme}) => theme.text};
  display: ${({ menuOpen,isMenu }) => ((menuOpen || !isMenu) ? "block" : "none")};
  cursor: pointer;

  ${tablet({display:"none"})}
`;
