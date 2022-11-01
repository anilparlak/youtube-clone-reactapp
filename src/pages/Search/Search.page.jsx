import React, { useEffect, useState } from "react";
import { Container } from "./search.style";
import axios from "axios"
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/Card.component"

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(`/videos/search${query}`);
      setVideos(response.data);
    };
    fetchVideos();
  }, [query]);
  return <Container>
     {videos.map(video=>(
      <Card key={video._id} video={video}/>
    ))}
  </Container>;
};

export default Search;
