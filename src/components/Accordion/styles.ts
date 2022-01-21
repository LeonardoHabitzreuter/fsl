import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.section`
  width: 100%;
  background-color: ${colors.white};
  padding: 20px;
  box-shadow: 0 0 10px #bfbcbc;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  margin: 0;
`

export const Subtitle = styled.p`
  color: ${colors.darkGray};
  font-weight: 600;
  margin-bottom: 10px;
`

export const Content = styled.div<{ show: boolean }>`
  max-height: ${({ show }) => show ? '300px' : '0px'};
  overflow: auto;
  transition: max-height 1s;
`

export const StatusAndArrow = styled.div`
  display: flex;
  align-items: center;
`

export const Arrow = styled(FontAwesomeIcon)<{ direction: 'down' | 'up' }>`
  transform: ${({ direction }) => `rotate(${direction === 'down' ? '180deg' : '0deg'})`};
  transition: transform 1s;
`

export const Status = styled.p`
  margin: 0 12px 0 6px;
`

export const Circle = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 15px;
  height: 15px;
  border-radius: 50%;

`
