import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container=styled.div`
width:300px;
cursor: pointer;

margin-bottom: ${(props)=>{
  if(props.type==="sm"){
    return "40px"
  }else if(props.type==="chan"){
    return "30px"
  }
  else{
    return "70px"
  }
}};
padding: 6.9px;

gap: ${(props)=>props.type==="sm" &&"7px"};
scrollbar-width: none; /* Standard CSS property to hide the scrollbar */

  /* Optionally, you can style the track and handle for better aesthetics */
  &::-webkit-scrollbar {
    width: 0;
  }
  position: relative;
`
const Img=styled.img`
width: 100%;
height: ${(props) => (props.type === "sm" ? "150px" : "200px")};
height: ${(props)=>{
  if(props.type==="sm"){
    return "150px"
  }else if(props.type==="chan"){
    return "170px"
  }
  else{
    return "200px"
  }
}};
background-color: #999;
`
const Details=styled.div`
display: flex;
gap: 12px;

`

const Texts=styled.div`
`
const Title=styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({theme})=>theme.text};
`
const Info=styled.div`
margin-top: -5px;
color: ${({theme})=>theme.textmenu};
`
const VideoCount=styled.div`
    position: absolute;
    top: 60%;
    right: 3%;
    font-size: small;
    background-color: black;
    border-radius: 15px;
    padding: 9px;
    align-self: center;
`

export const Playlist = ({type}) => {
  return (
    
    <Container type={type}><Img type={type}/>
    <VideoCount>100 Videos</VideoCount>
    <Details>
      <Texts>
        <Title>Playlist Title</Title>
        <Info>View full playlist</Info>
      </Texts>
    </Details>
    </Container>
  )
}
