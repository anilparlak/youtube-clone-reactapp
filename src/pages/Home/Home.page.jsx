import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card.component'
import { Container } from './home.style'
import axios from "axios"

const Home = ({type}) => {
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`/videos/${type}`);
        setVideos(()=>response.data)
      } catch (error) {
        console.log("Error",error)
      }
      
    }
    fetchVideos();
  },[type])

  return (
    <Container>
      {
        videos && videos.map((video) => (
          <Card key={video._id} video={video}/>
        ))
      }
        
    </Container>
  )
}

export default Home