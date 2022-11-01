import React, { useState } from "react";
import {
  Avatar,
  CustomAvatar,
  DropCard,
  DropCardText,
  DropDown,
  Hr,
  Logout,
  Text,
  ThemeContainer,
  User,
} from "./userCard.style";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ThemeSet from "../ThemeSet/ThemeSet.component";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/user.slice";

const UserCard = ({ currentUser, menuCard, setOpen }) => {
  const [drop, setDrop] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleDropDown = () => {
    setDrop(() => !drop);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <User menuCard={menuCard}>
      {!menuCard && (
        <VideoCallOutlinedIcon
          sx={{ cursor: "pointer", fontSize: "35px" }}
          onClick={handleOpen}
        />
      )}
      {currentUser.img ? (
        <Avatar src={currentUser.img} onClick={handleDropDown} />
      ) : (
        <CustomAvatar onClick={handleDropDown}>
          {currentUser.name.charAt(0)}
        </CustomAvatar>
      )}
      {currentUser.name}
      {
        <DropDown drop={drop}>
          <DropCard>
            <Avatar src={currentUser.img} />
            <DropCardText>
              <Text>{currentUser.name}</Text>
              <Text>{currentUser.email}</Text>
            </DropCardText>
          </DropCard>
          <Hr />
          <ThemeContainer>
            <ThemeSet isMenu={false} />
          </ThemeContainer>
          <Logout onClick={handleLogout}>
            <LogoutOutlinedIcon />
            <Text style={{ marginLeft: "25px" }}>Logout</Text>
          </Logout>
        </DropDown>
      }
    </User>
  );
};

export default UserCard;
