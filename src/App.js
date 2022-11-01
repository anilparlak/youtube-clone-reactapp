import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Category from './components/Category/Category.component';
import Menu from './components/Menu/Menu.component';
import Navbar from './components/Navbar/Navbar.component';
import { darkTheme, lightTheme } from './utils/Theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home.page';
import Video from './pages/Video/Video.page';
import SignIn from './pages/SignIn/SignIn.page';
import Search from './pages/Search/Search.page';
import { useSelector } from 'react-redux';
import Tags from './pages/Tags/Tags.page';

const Container = styled.div` 
  display: flex;
  flex-direction: column;
  
`
const Main = styled.div`
  display: flex;
`
const Wrapper = styled.div`
    flex: 6;
    background-color: ${({theme}) => theme.bg};
    
`
function App() {
  const [menuOpen,setMenuOpen] = useState(true);
  const { isDark } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        <Main>
          <Menu  menuOpen={menuOpen} />
          <Wrapper>
            <Category/>
            <Routes>
              <Route path='/'>
                <Route index element={<Home type="random"/>} />
                <Route path="trends" element={<Home type="trend"/>} />
                <Route path="subscriptions" element={<Home type="sub"/>} />
                <Route path="search" element={<Search />} />
                <Route path="tags" element={<Tags />} />
                <Route path='signin' element={<SignIn/>} />
                <Route path='video'>
                  <Route  path=':id' element={<Video/>}/>
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
