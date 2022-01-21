import React, { useState } from 'react'
import { Container, Subtitle, Content, Header, Title, Arrow, StatusAndArrow, Status, Circle } from './styles'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../theme/colors'

type Props = {
  children: React.ReactNode
  title: string
  subtitle: string
  status: 'online' | 'offline'
}

const Accordion = ({ title, subtitle, children, status }: Props) => {
  const [showContent, setShowContent] = useState(false)

  return (
    <Container>
      <Header>
        <Title data-testid='accordion-title'>{title}</Title>
        <StatusAndArrow>
          <Circle color={status === 'offline' ? 'red' : 'green'}/>
          <Status>
            {status === 'offline' ? 'OFFLINE' : 'ONLINE'}
          </Status>
          <Arrow
            size='2x'
            color={colors.darkGray}
            direction={showContent ? 'down' : 'up'}
            icon={faChevronDown}
            onClick={() => setShowContent(!showContent)}
          />
        </StatusAndArrow>
      </Header>

      <Subtitle>{subtitle}</Subtitle>

      <Content show={showContent}>
        {children}
      </Content>
    </Container>
  )
}

export default Accordion
