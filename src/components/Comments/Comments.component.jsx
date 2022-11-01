import React, { useEffect, useState } from "react";
import {
  Avatar,
  CommentBtn,
  CommentsCount,
  CommentsInfo,
  CommentsSort,
  Container,
  CustomAvatar,
  Input,
  NewComment,
  SortType,
  SortTypes,
} from "./comments.style";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import Comment from "../Comment/Comment.component";
import { useSelector } from "react-redux";
import { api } from "../../utils/api";

const Comments = ({ videoId }) => {
  const [hover, setHover] = useState(false);
  const [comments, setComments] = useState([]);
  const [inputComment,setInputComment] = useState("");
  const [reflesh,setReflesh] = useState(false)
  const { currentUser } = useSelector((state) => state.user);

  const handleHover = () => {
    setHover((prev) => !prev);
  };

  const handleInput = (e) => {
    setInputComment(()=>e.target.value)
  }

  const sendCommentHandle = async () => {
    try {
      await api().post("/comments/",{description:inputComment,videoId})
      setInputComment(()=>"")
      setReflesh(()=>!reflesh)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await api().get(`/comments/${videoId}`);
        setComments(response.data);
      } catch (error) {}
    };
    fetchComments();
  }, [videoId,reflesh]);

  const handleSort = (type) => {
    if(type === "newest"){
      setComments((prev) => prev.sort((b,a) => a.createdAt.localeCompare(b.createdAt)) )
    }else if(type === "top"){
      setComments((prev) => prev.sort((b,a) => b.createdAt.localeCompare(a.createdAt)) )
    }else {
      return
    }
    
  }
  
  return (
    <Container>
      <CommentsInfo>
        <CommentsCount>{comments.length} Comments</CommentsCount>
        <CommentsSort onClick={handleHover}>
          <SortOutlinedIcon />
          SORT BY
          <SortTypes hover={hover}>
            <SortType onClick={()=> handleSort("top")}>Top Comments</SortType>
            <SortType onClick={()=> handleSort("newest")}>Newest first</SortType>
          </SortTypes>
        </CommentsSort>
      </CommentsInfo>
      <NewComment>
        {currentUser?.img ? (
        <Avatar src={currentUser.img} />
      ) : (
        <CustomAvatar>
          {currentUser?.name.charAt(0)}
        </CustomAvatar>
      )}
        <Input placeholder="Add a comment..." value={inputComment} onChange={handleInput} />
      </NewComment>
      <CommentBtn onClick={sendCommentHandle} inputComment={inputComment}>Comment</CommentBtn>
      {comments && comments.map((comment) => (
        <Comment setReflesh={setReflesh} reflesh={reflesh} videoId={videoId} key={comment._id} comment={comment}  deleteIcon={(comment.userId === currentUser?._id) && true} />
      ))}
    </Container>
  );
};

export default Comments;
