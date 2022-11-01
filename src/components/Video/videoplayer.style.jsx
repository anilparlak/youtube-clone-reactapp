import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
`
export const VideoContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`
export const Player = styled.div`
    
`
export const VideoInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 10px 0 0;
`
export const VideoName = styled.h1`
    word-break: break-word;
    line-height: 2.6rem;
    font-weight: 400;
    max-height: 5.2rem;
    color: ${({theme}) => theme.text};
    font-size: 18px;
`
export const OtherInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: end;
`
export const VideoViewsAndDate = styled.div`
    display: flex;
`
export const Views = styled.span`
    color: ${({theme}) => theme.textSoft};
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;

    &::after{
        content: "•";
        margin: 0 4px;
    }

`
export const Date = styled.span`
    color: ${({theme}) => theme.textSoft};
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;

`
export const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`
export const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    font-size: 14px;
`;
export const Hr = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.soft};
`;
export const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
`;
export const CustomImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

export const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

export const ChannelName = styled.span`
  font-weight: 500;
`;

export const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;

`;

export const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

export const SubPopUp = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  min-width: 200px;
  height: auto;
  background-color: ${({theme}) => theme.bgLighter};
  top: 36px;
  right: 0;
  z-index: 99;
  padding: 20px 0;

`
export const SubText = styled.div`
  color: ${({theme}) => theme.text};
  font-size: 16px;
  line-height: 20px;
  padding: 0 20px;
  margin: 10px 0;
  text-overflow: ellipsis;
  white-space: nowrap;  

  &.soft {
    color: ${({theme}) => theme.textSoft};
  }

  &.link {
    text-transform: uppercase;
    font-size: 18px;
    color: #3ea6ff;
    cursor: pointer;
  }
`
