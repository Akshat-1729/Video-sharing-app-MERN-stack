import React, {useState} from 'react'
import styled from 'styled-components'
import chanlogo from '../images/chan.jpg'
import bg from '../images/bg.jpg'
import { Vidcard } from '../components/Vidcard'
import { Playlist } from '../components/Playlist'

const Container=styled.div`
    padding: 7px;
`
const Image=styled.img`
    background-size: contain;
    background-repeat: repeat;
    background-position: center;
    background-attachment: fixed;
    height: 250px;
    width: 100%;
    
`
const Imgbox=styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
`
const ChanImg=styled.img`
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  margin-top: -9vh;
  box-shadow: 0px 0px 10px 1px #f18787;
  transition: ease-in-out 0.4s;
  &:hover{
    transform: scale(1.07);
  }
`


const Details=styled.div`
  display: flex;
  gap: 0px;
  padding: 0%;
  flex-direction:column;
  justify-content:center;
  align-items: center;
`
const ChannelName=styled.h2`
margin: 0%;
text-shadow: 0px 0px 2px ${({theme})=>theme.channelGlow};
color: ${({theme})=>theme.textmenu};
font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const Desc=styled.h5`
margin: 3px;
color:${({theme})=>theme.channel};
`
const Hr=styled.hr`
  margin: 5px 0px;
  border: 0.5px solid ${({theme})=>theme.lines};
`;
const Categories=styled.h3`
  margin: 0%;
  display: flex;
  cursor: pointer;
  font-weight: ${(props)=>props.isSelected ?"bold":"normal"};
  transition: ease-in-out 0.1s;
  
`
const Wrapper=styled.div`
  width: 100%;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 550;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  letter-spacing: 0.7px;
  margin-top: 3px;
  cursor: pointer;
`;
const Options=styled.div`
  display: flex;
  margin-top: 7px;

  justify-content: space-between;
`
const Counts=styled.h5`
  margin: 0%;
  font-weight: light;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color:${({theme})=>theme.channel};
  margin-top: 7px;
`
const CategoryBox=styled.div`
  display: flex;
  justify-content:space-around;
  gap: 37px;
`
const Box=styled.div`
`
const Featured=styled.div`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-color: #999;
  cursor: pointer;
`

export const Channel = () => {
  const [selectedCategory, setSelectedCategory] = useState('Home');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <Container>
        <Image src={bg} />
        <Imgbox>
          <ChanImg src={chanlogo}/>
        </Imgbox>
        <Details>
          <ChannelName>Chan Chan Man</ChannelName>
          <Desc>Hi I make videos.</Desc>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Details>
        <Options>
        {/* Category buttons */}
        <CategoryBox>

        <Categories isSelected={selectedCategory==="Home"} onClick={() => handleCategoryClick('Home')}>Home</Categories>
        <Categories isSelected={selectedCategory==="Videos"}  onClick={() => handleCategoryClick('Videos')}>Videos  </Categories>
        <Categories isSelected={selectedCategory==="Playlist"}  onClick={() => handleCategoryClick('Playlist')}>Playlist</Categories>
        <Categories isSelected={selectedCategory==="About"}  onClick={() => handleCategoryClick('About')}>About</Categories>
        </CategoryBox>
        <Counts>200K Subscribers | 7M Views</Counts>
      </Options>

        <Hr/>
        <Box>
          {/* Conditionally render content based on selected category */}
        {selectedCategory === 'Home' && (
          <>
          <Wrapper>
            <Vidcard type="chan" />
            <Vidcard type="chan" />
            <Vidcard type="chan" />
          </Wrapper>
          <Categories style={{fontWeight:"bold"}}>Category</Categories>
          <Hr/>
          <Wrapper>
            <Vidcard type="chan" />
            <Vidcard type="chan" />
            <Vidcard type="chan" />
          </Wrapper>
          <Categories style={{fontWeight:"bold"}}>Featured Channels</Categories>
          <Hr/>
          <Wrapper style={{justifyContent:"space-evenly",marginTop:"17px"}}>
            <Featured/>
            <Featured/>
            <Featured/>
            <Featured/>
          </Wrapper>
          <Categories style={{fontWeight:"bold"}}>Category</Categories>
          <Hr/>
          <Wrapper>
            <Vidcard type="chan" />
            <Vidcard type="chan" />
            <Vidcard type="chan" />
          </Wrapper>
          </>
          
        )}

        {selectedCategory === 'Videos' && (
          <Wrapper>
          <Vidcard type="chan" />
            <Vidcard type="chan" />
            <Vidcard type="chan" />
            <Vidcard type="chan" />
            <Vidcard type="chan" />
            <Vidcard type="chan" />
          </Wrapper>
        )}
        {selectedCategory === 'Playlist' && (
          <Wrapper>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          </Wrapper>
        )}

        {selectedCategory === 'About' && (
          <>
          </>
        )}
        </Box>
    </Container>
  )
  }
