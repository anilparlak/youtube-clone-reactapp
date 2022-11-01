import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`;

export const CommentsInfo = styled.div`
    display: flex;
    margin: 0 0 20px 0;
`
export const CommentsCount = styled.span`
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    color: ${({theme}) => theme.text};
    margin-right: 30px;
`
export const CommentsSort = styled.div`
    color: ${({theme}) => theme.text};
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;
`
export const SortTypes = styled.div`
    position: absolute;
    top: 35px;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.sortBg};
    //padding: 10px 5px;
    width: max-content;
    z-index: 99;
    display: ${({hover}) => hover ? "flex" : "none"};
`
export const SortType = styled.span`
    color: ${({theme}) => theme.text};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding: 13px 25px;

    &.active {
        background-color: ${({theme}) => theme.serchBorder};
    }
    &:hover{
        background-color: ${({theme}) => theme.serchBorder};
    }

`
export const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
`;
export const CustomAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export const CommentBtn = styled.div`
  background-color:${({inputComment}) => inputComment ? "#3EA6FF" : "#303030"};
  color:#fff;
  font-weight:600;
  padding: 10px 16px;
  cursor: ${({inputComment}) => inputComment ? "pointer" : "not-allowed"};
  width: max-content;
  position: absolute;
  right: 0;
  border-radius: 3px;

`   