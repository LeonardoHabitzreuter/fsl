import React from 'react'
import Accordion from '../../components/Accordion'
import { Main, ItemBackground, ItemId } from './styles'

const Item = ({ id, text }: { id: number, text: string }) => (
  <ItemBackground>
    <ItemId>{id}</ItemId>
    <p>{text}</p>
  </ItemBackground>
)

export const App = () => (
  <Main>
    <h1>Nodes</h1>
    <Accordion title='Title' subtitle='https://test.com' status='online'>
      <Item id={1} text='Test'/>
      <Item id={1} text='Test'/>
      <Item id={1} text='Test'/>
      <Item id={1} text='Test'/>
      <Item id={1} text='Test'/>
      <Item id={1} text='Test'/>
      <Item id={1} text='Test'/>
      <Item id={1} text='Test'/>
      <Item id={1} text='Test'/>
      <Item id={1} text='Test'/>
    </Accordion>
  </Main>
)

export default App
