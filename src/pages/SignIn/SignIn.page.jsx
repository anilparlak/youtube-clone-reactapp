import React, { useState } from "react";
import {
  Button,
  Container,
  ErrorText,
  Hr,
  Input,
  Link,
  Links,
  More,
  SubTitle,
  Title,
  Wrapper,
} from "./signIn.style";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailed,
  loginStart,
  loginSucces,
  logout,
} from "../../redux/slices/user.slice";
import { auth, provider } from "../../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";

const USER_INFO = {
  name: "",
  password: "",
  email: "",
  loginName:"",
  loginPassword:""
};

const SignIn = () => {
  const [user, setUser] = useState(USER_INFO);
  const [signUpResult,setSignUpResult] = useState({});
  const [error,setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const handleSetUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleResetUser = () => {
    setUser(()=>USER_INFO)
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    const { loginName, loginPassword } = user;
    try {
      dispatch(logout());
      const response = await api().post("/auth/signin", { name:loginName, password:loginPassword });
      dispatch(loginSucces(response.data));
      handleResetUser();
      navigate("/")
    } catch (error) {
      dispatch(loginFailed());
      setError(error.response.data.message)
    
    }
  };

  const handleSignInWithGoogle = async () => {
    dispatch(loginStart())
    signInWithPopup(auth, provider)
      .then((result) => {
        api().post("/auth/google",{
          name:result.user.displayName,
          email:result.user.email,
          img:result.user.photoURL
        }).then((response) => {
          dispatch(loginSucces(response.data))
        });
        navigate("/")
      })
      .catch((error) => dispatch(loginFailed()));
  };

  const handleSingUp = async (e) => {
    e.preventDefault();
    const { name, password, email} = user;
    try {
      const response = await api().post("/auth/signup",{name,email,password});
      setSignUpResult(response);
      (response.status === 200) && handleResetUser();
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>Do you already have an account</SubTitle>
        <Input placeholder="Username" name="loginName" value={user.loginName} onChange={handleSetUser} />
        <Input
          type="password"
          placeholder="Password"
          name="loginPassword"
          value={user.loginPassword}
          onChange={handleSetUser}
        />
        {error && <ErrorText>{error}</ErrorText>}
        <Button onClick={handleLogin}>Sign In</Button>
        <Button type="google" onClick={handleSignInWithGoogle}>Sing In with Google</Button>
        <Hr />
        <Title>Sign Up</Title>
        <Input placeholder="Username" name="name" value={user.name} onChange={handleSetUser} />
        <Input placeholder="E-mail" name="email" value={user.email} onChange={handleSetUser} />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleSetUser}
        />
        <Button onClick={handleSingUp}>Sign Up</Button>
        {signUpResult && ((signUpResult.status === 200) ? signUpResult.data : "")}
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
