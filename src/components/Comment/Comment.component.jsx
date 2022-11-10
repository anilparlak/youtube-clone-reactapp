
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { format } from 'timeago.js';
import { api } from "../../utils/api";
import { Avatar, Container, CustomAvatar, Date, DeleteComment, Details, Name, Text } from './comment.style'

const Comment = ({comment,deleteIcon,reflesh,setReflesh}) => {
  const { currentUser } = useSelector((state) => state.user);
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchComment = async () => {
      const response = await api().get(`/users/find/${comment.userId}`);
      setChannel(response.data)
    };
    fetchComment();
  }, [comment.userId]);

  const handleDelete = async () => {
    try {
      await api(currentUser.token).delete(`/comments/${comment._id}`)
      setReflesh(()=>!reflesh)
    } catch (error) {
      console.log("error",error)
    }
  } 
  
  return (
    <Container>
      {
        channel.img ? <Avatar src={channel.img} /> : <CustomAvatar>{channel.name?.charAt(0)}</CustomAvatar>
      }
    
    <Details>
      <Name>
        {channel.name} <Date>{format(comment.createdAt)}</Date>
      </Name>
      <Text>
        {comment.description}
      </Text>
      {deleteIcon && (
          <DeleteComment onClick={handleDelete} title="Delete Comment">X</DeleteComment>
        )}
    </Details>
  </Container>
  )
}

export default Comment