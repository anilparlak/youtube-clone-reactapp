import { useLocation } from "react-router-dom";
import Tag from "../Tag/Tag.component";
import { Container } from "./category.style";

const tags = [
  "All",
  "Gaming",
  "Live",
  "Music",
  "Sports",
  "Comedy",
  "Eating",
  "Sitcoms",
  "Series",
  "Pop Music",
  "Nature",
];

const Category = () => {
  const location = useLocation().pathname;

  
  return (
    <>
    {
      (location === "/") && (<Container>
      {tags && tags.map((tag, index) => <Tag key={index} text={tag}   />)}
    </Container>) 
    }
    </>
  );
};

export default Category;
