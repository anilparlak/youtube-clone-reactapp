import { useEffect, useState } from "react";
import {
  CardImg,
  ChannelImg,
  ChannelInfo,
  ChannelName,
  Container,
  CustomChannelImg,
  Details,
  UploadDate,
  VideoInfo,
  VideoName,
  ViewTimes,
} from "./Card.style";
import { Link } from "react-router-dom";
import {format} from "timeago.js";
import axios from "axios"


const Card = ({ type , video }) => {
  const [channel,setChannel] = useState({});

  useEffect(()=>{
    const fetchChannels = async () => {
      try {
        const response = await axios.get(`/users/find/${video.userId}`);
        setChannel(()=>response.data)
      } catch (error) {
        console.log("Error",error)
      }
      
    }
    fetchChannels();
  },[video.userId]);

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <CardImg src={video.imageUrl} type={type}/>
        <Details>
          {
            channel?.img ? <ChannelImg src={channel.img} type={type}/> : <CustomChannelImg type={type}>{channel?.name?.charAt(0)}</CustomChannelImg>
            
          }
          <ChannelInfo type={type}>
            <VideoName>{video.title}</VideoName>
            <ChannelName>{channel.name}</ChannelName>
            <VideoInfo>
              <ViewTimes>{video.views} views</ViewTimes>
              <UploadDate>{format(video.createdAt)}</UploadDate>
            </VideoInfo>
          </ChannelInfo>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
