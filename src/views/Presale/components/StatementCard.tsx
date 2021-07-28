import React, { useState, useEffect } from 'react'
import { Heading, Card, CardBody, Text } from '@gameswapfinance/uikit'
import styled from 'styled-components'
import Divider from 'views/Farms/components/Divider'

const StyledHeading = styled(Heading)`
    font-size: 36px;
    margin-bottom: 15px;
    margin-top: 15px;
`

const StyleText = styled(Text)`
    margin-bottom: 5px;
    font-size: 18px;
   
`

const StyledDivider = styled(Divider)`
    margin-top: 25px;
    margin-bottom: 25px;
`
const StyleCard = styled(Card)`
    margin-bottom: 36px;
`

const StatementCard = () => {
    
    return (
        <>
               <StyledHeading>Information</StyledHeading>
               <StyleText>Presale start: Jul 23, 08:00 UTC</StyleText>
               <StyleText>Presale end: Jul 29, 08:00 UTC</StyleText>
               <StyleText>Presale Gold Ingot Rate: 150 BUSD/CSWAP or 15 GNT/CSWAP</StyleText>
               <StyleText>Hard Caps: 5750 CSWAPs</StyleText>
               <StyleText>Total Gold Ingot(CSWAP) supply: 6000 CSWAP</StyleText>
               
               <StyledHeading>How To</StyledHeading>
               <StyleText>1) Choose BUSD or GNT you want to use to buy CSWAP</StyleText>
               <StyleText>2) Click the unlock button and approve contract</StyleText>
               <StyleText>3) Click the buy button and enter the amount of BUSD or GNT you wish to pay</StyleText>
               <StyleText>4) Wait for claim to be activated</StyleText>
               <StyleText>5) Click the claim button to get your Gold Ingot (CSWAP)</StyleText>
        </>
    )
     

}

export default StatementCard