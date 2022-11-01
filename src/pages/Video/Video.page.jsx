import React, { useEffect, useState } from 'react'
import VideoPlayer from '../../components/Video/VideoPlayer.component'
import { Container, Content, RecommendationContainer } from './video.style'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { fetchSucces } from '../../redux/slices/video.slice';
import Recommendation from '../../components/Recommentaion/Recommendation.component';
import { api } from '../../utils/api';

const Video = () => {

  const { currentVideo } = useSelector((state) => state.video);
  
  const dispatch = useDispatch();
  
  const [channel,setChannel] = useState({});
  const path = useLocation().pathname.split("/")[2];

 useEffect(() => {
  const getData = async () => {
    try {
      const videoResponse = await api().get(`/videos/find/${path}`);
      const channelResponse = await api().get(`/users/find/${videoResponse.data.userId}`);
      setChannel(channelResponse.data)
      dispatch(fetchSucces(videoResponse.data))
      
    } catch (error) {
      console.log(error)
    }
  }
  getData();
 },[path,dispatch])

  return (
    <Container>
      <Content>
        <VideoPlayer  channel={channel}/>
      </Content>
      <Recommendation tags={currentVideo?.tags} />
    </Container>
  )
}

export default Video