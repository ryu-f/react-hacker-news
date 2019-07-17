import React from 'react'
import styled from 'styled-components'
import BasicText from '@/componets/atoms/BasicText'

type Props = {
  headLine?: string | React.ReactChild
  subTitle?: string | React.ReactChild
  bodyText?: string | React.ReactChild
  buttonText: string
}

export const Card: React.SFC<Props> = ({ headLine, subTitle, bodyText, buttonText }) => {
  return (
    <Wrapper>
      <PrimaryArea>
        {headLine && (
          <HeadLine size={'LARGE'} color={'BLACK'}>
            {headLine}
          </HeadLine>
        )}

        {subTitle && (
          <SubTitle as="a" size={'BASE'} color={'GLAY'}>
            {subTitle}
          </SubTitle>
        )}

        {bodyText && (
          <BodyText size={'BASE'} color={'BLACK'}>
            {bodyText}
          </BodyText>
        )}
      </PrimaryArea>
      <SecondaryArea>{buttonText}</SecondaryArea>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  height: 100%;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
`

const PrimaryArea = styled.div`
  width: 100%;
  padding: 1rem;
`

const HeadLine = styled(BasicText)`
  margin-top: 20px;
`
const SubTitle = styled(BasicText)`
  display: block;
  margin-top: 10px;
`

const BodyText = styled(BasicText)`
  margin-top: 20px;
`

const SecondaryArea = styled.div`
  padding: 1rem;
`
