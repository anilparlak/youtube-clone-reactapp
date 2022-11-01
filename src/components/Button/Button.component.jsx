import React from 'react'
import { ButtonContainer } from './button.style'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Link} from 'react-router-dom';

const Button = ({text,color}) => {
  return (
    <Link to="signin" style={{textDecoration:"none"}}>
      <ButtonContainer color={color} >
          <AccountCircleOutlinedIcon sx={{margin:"0 5px 0 0"}}/>
          {text}
      </ButtonContainer>
    </Link>
  )
}

export default Button