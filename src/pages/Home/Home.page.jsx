import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card.component'
import { Container } from './home.style'
import {api} from "../../utils/api"
import axios from 'axios'
import { BaseUrl } from '../../utils/baseUrl'

const Home = ({type}) => {
  const [content,setContent] = useState([]);

  useEffect(()=>{
    const fetchVideos = async () => {
      try {
        const response = await api().get(`/videos/${type}`);
        setContent(response.data)
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