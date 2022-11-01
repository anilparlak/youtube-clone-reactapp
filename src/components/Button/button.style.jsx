import styled from "styled-components";

export const ButtonContainer = styled.button`
    border: 1px solid ${props => props.color || "#000"};
    padding: 5px 15px;
    display: flex;
    align-items: center;
    background: transparent;
    color: ${props => props.color || "#000"};
    font-size: 16px;
    font-weight: 500;
    margin: 15px 0;
    border-radius: 3px;
    cursor: pointer;
`