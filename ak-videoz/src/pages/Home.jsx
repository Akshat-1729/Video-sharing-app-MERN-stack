import React from 'react'
import styled from 'styled-components'
import { Vidcard } from '../components/Vidcard'
const Container=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export const Home = () => {
  return (
    <Container>
      <Vidcard/>
      <Vidcard/>
      <Vidcard/>
      <Vidcard/>
      <Vidcard/>
      <Vidcard/>
      <Vidcard/>
      <Vidcard/>
      <Vidcard/>
      <Vidcard/>

    </Container>
  )
}
