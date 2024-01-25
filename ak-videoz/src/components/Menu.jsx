import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.jpg'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from 'react-router-dom';
const Container =styled.div`
  flex:1.1;
  height: 100vh;
  background-color:${({theme})=>theme.bg}; 
  color: ${({theme})=>theme.textmenu};
  overflow-y: auto;
  position: sticky;
  top: 0;
  scrollbar-width: none; /* Standard CSS property to hide the scrollbar */

  /* Optionally, you can style the track and handle for better aesthetics */
  &::-webkit-scrollbar {
    width: 0;
  }
`
const Wrapper =styled.div`
  padding: 18px 26px;
`
const Logo =styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-bottom:25px;
  position: sticky;
  background-color:${({theme})=>theme.bg};
  top: 0;
  padding: 3px 0px;
  
`

const OrangeText = styled.span`
  color: #dc5b06;
`;
const Img=styled.img`
height: 40px;
width: 70px;
border-radius: 7px;
`
const Item=styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  cursor: pointer;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px; 
  padding: 9px 0px;
`
const Hr=styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme})=>theme.lines};
`;
const Login=styled.div`
  font-size: 14px;
`
const Button=styled.button`
  background-color: transparent;
  border: 1.5px solid #00919b;
  color: #9adef6;
  padding: 3px 9px;
  font-weight: bold;
  letter-spacing: 0.7px;
  margin-top: 3px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`
const Headng=styled.h2`
  color: ${({theme})=>theme.explore};
  font-weight: bold;
  font-size: medium;
`
const NormalText=styled.span`
  color: ${({theme})=>theme.textmenu};
`
const icon={fontSize:'20px'}
export const Menu = ({darkMode,setDarkMode}) => {
  const display=darkMode ? "Light Mode":"Dark Mode";
  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{textDecoration:"none"}}>
        <Logo>
          <Img src={logo}/>
          <div>
          <OrangeText>AK</OrangeText><NormalText>ube</NormalText>
          </div>
        </Logo>
        </Link>
        <Item>
          <HomeIcon style={icon}/>
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon style={icon} />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon style={icon}  />
          Subscriptions
        </Item>
        <Hr/>
        <Item>
          <VideoLibraryOutlinedIcon style={icon} />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon style={icon} />
          History
        </Item>
        <Hr/>
        
        <Headng>
          Explore AKube
        </Headng>
        <Item>
          <LibraryMusicOutlinedIcon style={icon} />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon style={icon} />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon style={icon}/>
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon style={icon}/>
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon style={icon}/>
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon style={icon}/>
          Live
        </Item>
        <Hr/>
        <Item>
          <SettingsOutlinedIcon style={icon}/>
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon style={icon}/>
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon style={icon}/>
          Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon style={icon} />
          {display}
        </Item>

      </Wrapper>
    </Container>
  )
}
