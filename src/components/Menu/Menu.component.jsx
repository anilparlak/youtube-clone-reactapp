import {
  Hr,
  MenuContainer,
  MenuItem,
  MenuText,
  SignIn,
  Title,
} from "./menu.style";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SwitchVideoOutlinedIcon from "@mui/icons-material/SwitchVideoOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Button from "../Button/Button.component";
import { Link, useLocation } from "react-router-dom";
import {  useSelector } from "react-redux";
import ThemeSet from "../ThemeSet/ThemeSet.component";


const Menu = ({ menuOpen}) => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
 
  return (
    <MenuContainer menuOpen={menuOpen}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <MenuItem className={(location.pathname === "/") ? "active" : ""}>
        <HomeIcon />
        <MenuText menuOpen={menuOpen}>Home</MenuText>
      </MenuItem>
      </Link>
      <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
        <MenuItem className={(location.pathname === "/trends") ? "active" : ""}>
          <ExploreOutlinedIcon />
          <MenuText menuOpen={menuOpen}>Explore</MenuText>
        </MenuItem>
      </Link>
      <MenuItem>
        <SwitchVideoOutlinedIcon />
        <MenuText menuOpen={menuOpen}>Shorts</MenuText>
      </MenuItem>
      <Link
        to="subscriptions"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem className={(location.pathname === "/subscriptions") ? "active" : ""}>
          <SubscriptionsOutlinedIcon />
          <MenuText menuOpen={menuOpen}>Subscriptions</MenuText>
        </MenuItem>
      </Link>
      <Hr />
      <MenuItem>
        <VideoLibraryOutlinedIcon />
        <MenuText menuOpen={menuOpen}>Library</MenuText>
      </MenuItem>
      <MenuItem>
        <HistoryOutlinedIcon />
        <MenuText menuOpen={menuOpen}>History</MenuText>
      </MenuItem>
      <Hr />
      {currentUser ? (
        ""
      ) : (
        <>
          <SignIn>
            Sign in to like videos, comment, and subscribe.
            <Button text={"SIGN IN"} color={"#3ea6ff"} />
          </SignIn>
          <Hr />
        </>
      )}

      {menuOpen && <Title >Explore</Title>}
      <MenuItem>
        <MusicVideoIcon />
        <MenuText menuOpen={menuOpen}>Music</MenuText>
      </MenuItem>
      <MenuItem>
        <EmojiEventsIcon />
        <MenuText menuOpen={menuOpen}>Sports</MenuText>
      </MenuItem>
      <MenuItem>
        <SportsEsportsOutlinedIcon />
        <MenuText menuOpen={menuOpen}>Gaming</MenuText>
      </MenuItem>
      <MenuItem>
        <SensorsOutlinedIcon />
        <MenuText menuOpen={menuOpen}>Live</MenuText>
      </MenuItem>
      <Hr />
      <MenuItem>
        <SettingsOutlinedIcon />
        <MenuText menuOpen={menuOpen}>Settings</MenuText>
      </MenuItem>
      <MenuItem>
        <FlagOutlinedIcon />
        <MenuText menuOpen={menuOpen}>Report</MenuText>
      </MenuItem>
      <MenuItem>
        <HelpOutlineOutlinedIcon />
        <MenuText menuOpen={menuOpen}>Help</MenuText>
      </MenuItem>
      <MenuItem>
        <ThemeSet menuOpen={menuOpen} isMenu={true}/>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
