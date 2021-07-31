import React, { useState, useEffect } from 'react'
import { Heading, Card, CardBody, Text } from '@lukkasromero/cswap-uikit'
import Countdown from 'react-countdown'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useStartingTimeStamp } from 'hooks/usePresale'

const StyledCard = styled(Card)`
  padding-left: 48px;
  padding-right: 48px;
  @media screen and (max-width: 540px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`

const StyleNumber = styled(Heading)`
  font-size: 48px;
  margin-bottom: 36px;
`

const StyleHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 36px;
`

const StyleText = styled(Text)``

const CountdownCard = () => {
  const endTimeStamp = new BigNumber(useStartingTimeStamp()).toNumber()*1000
  const now = new Date().getTime() / 1000
  const endTime = 60 * 60 * 24 * 6
  const startDate = 1627804800000

  const isPresaleStarted = Date.now() > startDate
  const endCountDownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <>
        <StyleNumber as="h3" size="MD">
          {days > 0?`days${":"}`:""}  {hours} Hours : {minutes} Minutes : {seconds} Seconds
        </StyleNumber>
      </>
    )
  }



  return (
    <StyledCard>
      <CardBody>
        {isPresaleStarted ? (
          <StyleHeading size="lg" as="h1">
            END OF PRESALE
          </StyleHeading>
        ) : (
          <StyleHeading size="lg" as="h1">
            Presale Starts in 
          </StyleHeading>
        )}

        {/* startDate */}
        <Countdown date={new Date((isPresaleStarted?endTimeStamp:startDate) )} renderer={endCountDownRenderer} />
      </CardBody>
    </StyledCard>
  )
}

export default CountdownCard
