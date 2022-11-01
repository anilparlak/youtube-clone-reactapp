import styled from "styled-components";
import { tablet } from "../../utils/responsive";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.bgLighter};
    padding:0 25px;
    color: ${({theme}) => theme.text};
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`
export const Logo = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;    
    margin: 0 0 0 25px;
`
export const Img = styled.img`
    height: 30px;

`
export const LogoText = styled.div`
    color: ${({theme}) => theme.text};
    font-size: 20px;
    font-weight: bold;
    margin-left: 5px;
`

export const SearchContainer = styled.div`
    width: auto;
    color: ${({theme}) => theme.text};
    display: flex;
    align-items: center;
    border-right: none;
    border-radius: 2px 0 0 2px;
    ${tablet({width:"40%"})}
`
export const SearchInput = styled.input`
    width: 525px;
    outline: none;
    padding: 1px 0;
    background-color: ${({theme}) => theme.serchBg};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    border: none;
    padding: 9px 0 9px 8px;
    border: 0.5px solid ${({theme}) => theme.serchBorder};
    color: ${({theme}) => theme.text};;
    &:focus{
        border-color: #173A65;
    }

    ${tablet({width:"100%"})}
`
export const SeacrhIcon = styled.div`
    padding: 8px 15px; 
    position: relative;
    background-color: ${({theme}) => theme.serchBorder};
    cursor: pointer;
    
`