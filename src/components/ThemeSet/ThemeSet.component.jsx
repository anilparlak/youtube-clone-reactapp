import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Text } from "./themeSet.style";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { setTheme } from "../../redux/slices/theme.slice";

const ThemeSet = ({isMenu,menuOpen}) => {
  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleThemeMode = () => {""
    dispatch(setTheme(!isDark))
  };
  return (
    <Container onClick={handleThemeMode}>
      {isDark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      <Text isMenu={isMenu} menuOpen={menuOpen}>Theme</Text>
    </Container>
  );
};

export default ThemeSet;
