import React, { useEffect, useState } from "react";
import {
  Button,
  Buttons,
  Channel,
  ChannelCounter,
  ChannelDetail,
  ChannelInfo,
  ChannelName,
  Container,
  CustomImage,
  Date,
  Description,
  Hr,
  Image,
  OtherInfo,
  Player,
  SubPopUp,
  Subscribe,
  SubText,
  VideoContent,
  VideoFrame,
  VideoInfo,
  VideoName,
  VideoViewsAndDate,
  Views,
} from "./videoplayer.style";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Comments from "../Comments/Comments.component";
import { format } from "timeago.js";
import { useSelector, useDispatch } from "react-redux";
import { dislike, fetchSucces, like } from "../../redux/slices/video.slice";
import { subscription } from "../../redux/slices/user.slice";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import axios from "axios";
import { BaseUrl } from "../../utils/baseUrl";

const VideoPlayer = ({ channel }) => {
  const { currentVideo } = useSelector((state) => state.video);
  const { currentUser } = useSelector((state) => state.user);
  const [popUpSub, setPopUpSub] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    const increaseViewFunc = async () => {
      try {
        await api().put(`/videos/view/${currentVideo._id}`)
      } catch (error) {
        console.log("error",error)
      }
    }
    increaseViewFunc();
  },[currentVideo?._id])

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };
  const handleSub = async () => {
    try {
      if (!currentUser) {
        setPopUpSub(() => !popUpSub);
        return;
      }
      currentUser?.subscribedUsers.includes(channel._id)
        ? await api().put(`/users/unsub/${channel._id}`)
        : await api().put(`/users/sub/${channel._id}`);
      dispatch(subscription(channel._id));
    } catch (error) {
      console.log("Error ->", error);
    }
  };

  return (
    <Container>
      <VideoContent>
        <Player>
          <VideoFrame src={currentVideo?.videoUrl} controls  autoPlay/>
        </Player>
        <VideoInfo>
          <VideoName>{currentVideo?.title}</VideoName>
        </VideoInfo>
        <OtherInfo>
          <VideoViewsAndDate>
            <Views>{currentVideo?.views} views</Views>
            <Date>{format(currentVideo?.createdAt)}</Date>
          </VideoViewsAndDate>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo?.likes?.includes(currentUser?._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )}
              {currentVideo?.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo?.dislikes?.includes(currentUser?._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownAltOutlinedIcon />
              )}
              DISLIKE
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              SHARE
            </Button>
            <Button>
              <LibraryAddCheckOutlinedIcon />
              SAVE
            </Button>
          </Buttons>
        </OtherInfo>
        <Hr />
        <Channel>
          <ChannelInfo>
            {
              channel.img ? <Image src={channel?.img} /> : <CustomImage>{channel?.name?.charAt(0)}</CustomImage>
            }
            
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>
                {channel?.subscribers} subscribers
              </ChannelCounter>
              <Description>{currentVideo?.description}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>
            {currentUser?.subscribedUsers?.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
          {popUpSub && (
            <SubPopUp>
              <SubText>Do you want to subscribe to this channel?</SubText>
              <SubText className="soft">
                Sign in to subscribe to this channel.
              </SubText>
              <Hr />
              <SubText className="link" onClick={() => navigate("/signin")}>
                Sign In
              </SubText>
            </SubPopUp>
          )}
        </Channel>
        <Hr />
        <Comments videoId={currentVideo?._id} />
      </VideoContent>
    </Container>
  );
};

export default VideoPlayer;
