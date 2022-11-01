import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 60px 0px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: 700;
  color: #fff;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  position: relative;
`;
export const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

export const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

export const Text = styled.span`
  font-size: 14px;
`;

export const DeleteComment = styled.div`
  color: ${({theme}) => theme.text};
  width: 16px;
  height: 16px;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  right: 0;
  top: calc((100% - 16px) / 2);
  cursor: pointer;
`