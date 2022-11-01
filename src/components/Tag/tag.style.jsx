import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.soft};
    margin: 12px 36px 12px 0;
    height: 32px;
    margin-left: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0 12px;
    cursor: pointer;
    border-radius: 16px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: ${({ theme }) => theme.soft};;
    }
    
`
export const TagText = styled.span`
    color: ${({theme}) => theme.text};
    font-size: 14px;
`