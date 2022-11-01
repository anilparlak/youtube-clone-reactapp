import styled from "styled-components";

export const Container = styled.div`
  width: ${({type}) => type === "miniCard" ? "100%" : "296px"};;
  height: ${({type}) => type === "miniCard" ? "94px" : "275px"};
  display: flex;
  flex-direction: ${({type}) => type !== "miniCard" && "column"};
  cursor: pointer;
  margin-bottom: ${({type}) => type === "miniCard" && "10px"};
`;
export const CardImg = styled.img`
  width: 100%;
  height: ${({type}) => type === "miniCard" ? "94px" : "175px"};;
  background-color: #999;
  margin-bottom: 10px;
  object-fit: cover;
`;
export const Details = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
`;
export const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  background-color: #999;
  display: ${({type}) => type === "miniCard" && "none"};
`;
export const CustomChannelImg = styled.div`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  background-color: #999;
  display: ${({type}) => (type === "miniCard") ? "none" : "flex"};
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
`;
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 15px;
  padding: ${({type}) => type === "miniCard" ? "0" : "3px 8px 0 0"};
`;
export const VideoName = styled.span`
  max-height: 4.4rem;
  overflow: hidden;
  display: block;
  -webkit-line-clamp: 2;
  display: box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  line-height: 20px;
  font-size: 16px;
`;
export const ChannelName = styled.span`
  word-break: break-word;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: -0.1em;
  padding-right: 0.1em;
  white-space: pre;
  margin: 5px 0;

  &:hover{
    color: ${({theme}) => theme.text};
  }
`;
export const VideoInfo = styled.div`
    display: flex;
`
export const ViewTimes = styled.span`
    display: inline-block;
    white-space: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};

    &::after{
        content: "•";
        margin: 0 4px;
    }

`
export const UploadDate = styled.span`
    display: inline-block;
    white-space: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};

`