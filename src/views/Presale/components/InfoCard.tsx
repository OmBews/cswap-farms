import React, { useState, useEffect } from 'react'
import { Heading, Card, CardBody, CardHeader, Text, HelpIcon, Link, Flex } from '@lukkasromero/cswap-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useTotalTokensSold, usePricePerToken } from 'hooks/usePresale'
import useTokenBalance from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { usePriceBnbBusd } from 'state/hooks'

const StyledCard = styled(Card)`
    padding-left: 48px;
    padding-right: 48px;
    @media screen and (max-width: 540px) {
        padding-left: 12px;
        padding-right: 12px;
    }
`

const StyledCardHeader = styled(CardHeader)`
    background: transparent;
    font-size: 30px;
`

const StyledHeading = styled(Heading)`
    font-size: 30px;
    margin-bottom: 15px;
`

const StyledDivider = styled.div`
    margin-top: 25px;
`

const StyleText = styled(Text)`
    font-size: 18px;
`
const StyleTextt = styled(Text)`
    font-size: 20px;
`

const StyledHelpIcon = styled(HelpIcon)`
    cursor: pointer;
`
const NonActive = styled.span`
    color: #ff720d;
`

const Active = styled.span`
    color: #5bd360;
`

const DataCard = () => {

    const { account } = useWallet()
    const bnbPrice = new BigNumber(usePriceBnbBusd()).toNumber() || 300
    const totalTokenForSale = 5750
    const totalTokensSold = new BigNumber(useTotalTokensSold()).div(1e18).toNumber()
    const price = new BigNumber(usePricePerToken()).toNumber()
    
    
    

    const now = new Date().getTime() / 1000 

  
    return (
        <StyledCard>
            <CardBody>
                <StyledHeading>Information</StyledHeading>
                

                   <Flex justifyContent='space-between' mb="3px">
                    <StyleText>Start at:</StyleText>
                    <StyleTextt bold>Aug 1, 8AM UTC</StyleTextt>
                </Flex>
               

                <Flex justifyContent='space-between' mb="3px">
                    <StyleText>Ends in:</StyleText>
                    <StyleTextt bold>Aug 2, 8AM UTC</StyleTextt>
                </Flex>
                <StyledHeading>How to</StyledHeading>

                <Flex justifyContent='space-between' mb="3px">
                    <StyleText>1) Click the unlock button</StyleText>
                </Flex>
                <Flex justifyContent='space-between' mb="3px">
                    <StyleText>2) Click the buy button and enter the MATIC you wish to pay
</StyleText>
                </Flex>
                <Flex justifyContent='space-between' mb="3px">
                    <StyleText>3) You can claim tokens in your wallet immediately after the payment</StyleText>
                </Flex>
               
              
            </CardBody>
        </StyledCard>    
    )
     

}

export default DataCard