import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {Video} from "./pages/Video";
import { Channel } from "./pages/Channel";
const Container=styled.div`
display:flex;
scrollbar-width: none; /* Standard CSS property to hide the scrollbar */

  /* Optionally, you can style the track and handle for better aesthetics */
  &::-webkit-scrollbar {
    width: 0;
  }
`

const Main=styled.div`
flex:7;
background-color: ${({theme})=>theme.mainbg};
`;
const Wrapper=styled.div`
color:${({theme})=>theme.text} ;

`;

function App(){
  const [darkMode,setDarkMode]=useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme:lightTheme}>

    <Container>
      <BrowserRouter>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/">
              {/* takes us to home page */}
              <Route index element={<Home/>}/>
              {/* we search any video id   it takes us to video page */}
              <Route path="video">
                <Route path=":id" element={<Video/>}/>
              </Route>
              <Route path="channel">
                <Route path=":id" element={<Channel/>}/>
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