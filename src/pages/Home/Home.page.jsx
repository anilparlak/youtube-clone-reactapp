import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card.component'
import { Container } from './home.style'
import axios from "axios"

const Home = ({type}) => {
  const [content,setContent] = useState([]);

  useEffect(()=>{
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`/videos/${type}`);
        console.log(response)
      } catch (error) {
        console.log("Error",error)
      }
      
    }
    fetchVideos();
    
  },[type])
  console.log(content)
  return (
    <Container>
      {
        content && content?.map((video) => (
          <Card key={video._id} video={video}/>
        ))
      }
        
    </Container>
  )
}

export default Home