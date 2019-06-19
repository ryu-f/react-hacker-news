import React from 'react'
import styled from 'styled-components'
import BasicText from '@/componets/atoms/BasicText'

type Props = {
  headLine: string | React.ReactChild
  subTitle: string | React.ReactChild
  bodyText: string | React.ReactChild
  buttonText: string
}

const Card: React.SFC<Props> = ({ headLine, subTitle, bodyText, buttonText }) => {
  return (
    <Wrapper>
      <Primary>
        <HeadLine size={'LARGE'} color={'BLACK'}>
          {headLine}
        </HeadLine>
        <SubTitle size={'BASE'} color={'BLACK'}>
          {subTitle}
        </SubTitle>
        <BodyText size={'BASE'} color={'BLACK'}>
          {bodyText}
        </BodyText>
      </Primary>
      <Secondary>{buttonText}</Secondary>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
`

const Primary = styled.div`
  width: 100%;
  padding: 1rem;
`

const HeadLine = styled(BasicText)`
  margin-top: 20px;
`
const SubTitle = styled(BasicText)`
  margin-top: 20px;
`

const BodyText = styled(BasicText)`
  margin-top: 20px;
`

const Secondary = styled.div`
  padding: 1rem;
`

export default Card
