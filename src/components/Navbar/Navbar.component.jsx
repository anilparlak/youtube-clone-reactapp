import {
  Img,
  Logo,
  LogoContainer,
  LogoText,
  NavbarContainer,
  SeacrhIcon,
  SearchContainer,
  SearchInput,
} from "./navbar.style";
import LogoImg from "../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "../Button/Button.component";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard.component";
import { useState } from "react";
import Upload from "../Upload/Upload.component";

const Navbar = ({menuOpen,setMenuOpen}) => {
  const { currentUser } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const handleMenuOpen = () => {
    setMenuOpen(()=>(!menuOpen))
  }

  return (
    <>
      <NavbarContainer>
        <Link to="/" style={{ textDecoration: "none" , color:"inherit"}}>
          <LogoContainer>
            <MenuIcon sx={{ cursor: "pointer"}} onClick={handleMenuOpen}/>
            <Logo>
              <Img src={LogoImg} />
              <LogoText>YouTube</LogoText>
            </Logo>
          </LogoContainer>
        </Link>
        <SearchContainer>
          <SearchInput
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => ( (e.key === "Enter") && navigate(`/search?q=${search}`))}
          />
          <SeacrhIcon>
            <SearchOutlinedIcon
              onClick={() => navigate(`/search?q=${search}`)}
              
            />
          </SeacrhIcon>
        </SearchContainer>

        {currentUser ? (
          <UserCard
            currentUser={currentUser}
            menuCard={false}
            setOpen={setOpen}
          />
        ) : (
          <Button text={"SIGN IN"} color={"#3ea6ff"} />
        )}
      </NavbarContainer>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
