import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Container=styled.div`
  background-color:${({theme})=>theme.bg};
  height:55px;
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  position: sticky;
  top: 0;
`
const Searchbar=styled.input`
  height: 25px;
  border: none;
  border: 0.5px solid #0000005c;
  outline: none;
  width: 500px;
  border-radius: 10px;
  background-color: ${({theme})=>theme.searchbar};
  color: ${({theme})=>theme.textmenu};
  padding: 0px 7px;
`
const Signin=styled.button`
  border: none;
  background-color: transparent;
  color:${({theme})=>theme.signin};
  letter-spacing: 0.8px; 
  font-weight: bold;
  padding:3px 7px;
  display: flex;
  gap: 3px;
  align-items: center;
  margin-right: -110px;
  cursor:pointer;
`
  const searchicon={position:'relative',top:'7', right:'27',color:'#5e5864'}

export const Navbar = () => {
  return (
    <Container>
      <div>

      <Searchbar placeholder='Search'/>
      <SearchIcon style={searchicon}/>
      </div>
      <Signin><AccountCircleOutlinedIcon/>Sign In</Signin>
    </Container>
  )
}
