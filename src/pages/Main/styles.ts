import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const Main = styled.main`
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
`

export const ItemBackground = styled.div`
  background-color: ${colors.lightGray};
  padding: 10px;
  margin-bottom: 10px;
`

export const ItemId = styled.p`
  font-weight: 500;
  margin-bottom: 6px;
  color: blue;
`
