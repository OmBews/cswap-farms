import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@lukkasromero/cswap-uikit'
// eslint-disable-next-line import/no-unresolved
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  const tvl = totalValue.toFixed(2);


  useEffect(()=>{

    console.log("totalValue",totalValue.toNumber())
  },[totalValue])
  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          Total Value Locked
        </Heading>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
          <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} />
          {/* </Heading> */}
          <Text color="textSubtle">{TranslateString(999, 'Across all Farms and Pools')}</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
