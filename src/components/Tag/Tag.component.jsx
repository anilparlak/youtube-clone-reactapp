import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Container, TagText } from "./tag.style"

const Tag = ({text}) => {
  const [tag,setTag] = useState("");
  const navigate = useNavigate();

  const handleTag = (e) => {
    const clickTag = e.target.outerText.toLowerCase();
    if(clickTag === "all"){
      navigate("/")
    }else {
      navigate(`/tags/?tags=${clickTag}`)
    }
    
  }
  
  return (
    <Container>
        <TagText onClick={handleTag}>{text}</TagText>
    </Container>
  )
}

export default Tag