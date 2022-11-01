import styled from "styled-components";
import { tablet } from "../../utils/responsive";

export const Container = styled.div`
    height: 56px;
    display: flex;
    background: ${({theme}) => theme.bgLighter};
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-left:36px;
    justify-content: center;
    position: sticky;
    top: 56px;
    width: 100%;

    ${tablet({display:"none"})}
`