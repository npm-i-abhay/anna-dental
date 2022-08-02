import React,{useState}  from 'react'
import styled from 'styled-components'


// utils
import { useTheme } from '@/utils/provider'
import { comp_theme } from '@/utils/variables'



export  const Navigation = () => {
    const {theme} = useTheme()

  return (
    <Container>Navigation</Container>
  )
}


// STYLED COMPONENTS ------==--===---=========--------
const Container = styled.div`
`
const Bar1 = styled.div`
height:10px;
width:20px;

`


