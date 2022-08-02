import React from 'react'
import styled from 'styled-components'

// utils
import { comp_theme } from '@/utils/variables'
import { useTheme } from '@/utils/provider'

// components 
import { Navigation } from './Navigation'

export const Layout = () => {
    
return (
    <Wrapper>
        <Navigation/>

    </Wrapper>
  )
}



const Wrapper = styled.div`
height:100%;
width:100%;
color:${({theme})=>theme.text};
background:${({theme})=>theme.body};
`