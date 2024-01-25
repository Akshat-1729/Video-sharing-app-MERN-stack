import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container=styled.div`
width:${(props)=>(props.type==="chan"?"300px":"350px")};
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
display: ${(props)=>props.type==="sm" &&"flex"};
gap: ${(props)=>props.type==="sm" &&"7px"};
scrollbar-width: none; /* Standard CSS property to hide the scrollbar */

  /* Optionally, you can style the track and handle for better aesthetics */
  &::-webkit-scrollbar {
    width: 0;
  }
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
const Channelimg=styled.img`
width: ${(props) => (props.type === "sm" ? "50px" : "32px")};
height: ${(props) => (props.type === "sm" ? "30px" : "32px")};
margin-top: 7px;
border-radius: 50%;
background-color: #999;
`
const Texts=styled.div`
`
const Title=styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({theme})=>theme.text};
`
const Channel=styled.h2`
font-size: 14px;
color: ${({theme})=>theme.textmenu};
`
const Info=styled.div`
margin-top: -5px;
color: ${({theme})=>theme.textmenu};
`

export const Vidcard = ({type}) => {
  return (
    <Link to="/video/te" style={{textDecoration:"none"}}>
    <Container type={type}><Img type={type}/>
    <Details>
      <Channelimg type={type}/>
      <Texts>
        <Title>Title</Title>
        <Channel>akshat</Channel>
        <Info>660,908 views • 1 day ago</Info>
      </Texts>
    </Details>
    </Container>
    </Link>
  )
}
