import styled from "styled-components";

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  padding: ${({menuCard}) => menuCard ? "0 24px" : "inherit"};
  position: relative;
  
  
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  cursor: pointer;
`;

export const DropDown = styled.div`
  width: 298px;
  height: auto;
  background-color: ${({theme}) => theme.sortBg};
  position: absolute;
  left: -113px;
  top: 46px;
  z-index: 200;
  padding: 20px 25px;
  color: ${({theme}) => theme.text};
  border-radius: 3px;
  display: ${({drop}) => drop ? "block" : "none"};
 
`

export const DropCard = styled.div`
  display: flex;
  margin: 0 0 15px 0;
`
export const DropCardText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 15px;
`
export const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  font-weight: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
`
export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.soft};
  margin: 15px 0 0 0;
`;
export const ThemeContainer = styled.div`
  cursor: pointer;
  //margin: 10px 0;
  padding: 10px 0;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`
export const Logout = styled.div`
  display: flex;
  //margin: 10px 0;
  padding: 10px 0;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`

export const CustomAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ccc;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`