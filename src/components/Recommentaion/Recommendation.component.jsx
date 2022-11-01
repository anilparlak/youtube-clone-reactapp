import axios from "axios"
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card.component";
import { RecommendationContainer } from "./recommendation.style";

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);
  const { currentVideo } = useSelector((state) => state.video);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(`/videos/tags?tags=${tags}`);
      setVideos(response.data);
    };
    fetchVideos();
  }, [tags]);
  return (
    <RecommendationContainer>
      {videos.map((video) => (
        (video._id !== currentVideo._id) &&  <Card type="miniCard" key={video._id} video={video} />
      ))}
    </RecommendationContainer>
  );
};

export default Recommendation;
