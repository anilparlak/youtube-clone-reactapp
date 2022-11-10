import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card.component'
import { Container } from './home.style'
import { api } from "../../utils/api"
import { useSelector } from 'react-redux'


const Home = ({type}) => {
  const [content,setContent] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const tokenCheck = (type === "sub") ? currentUser.token : "" ;
  useEffect(()=>{
    const fetchVideos = async () => {
      try {
        const response = await api(tokenCheck).get(`/videos/${type}`);
        setContent(response.data)
      } catch (error) {
        console.log("Error",error)
      }
      
    }
    fetchVideos();
    
  },[type])
  
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