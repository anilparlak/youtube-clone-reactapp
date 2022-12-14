import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card.component'
import { api } from '../../utils/api';
import { Container } from './tags.style'

const Tags = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await api().get(`/videos/tags${query}`);
      setVideos(response.data);
    };
    fetchVideos();
  }, [query]);

  return (
    <Container>
     {videos?.map(video=>(
      <Card key={video._id} video={video}/>
    ))}
  </Container>
  )
}

export default Tags