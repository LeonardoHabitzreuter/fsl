import React from 'react'
import Accordion from './index'
import { render } from '@testing-library/react'

describe('Accordion component', () => {
  test('should renders the right title and children', () => {
    const { getByTestId, getByText } = render(
      <Accordion
        title='Title'
        subtitle='Subtitle'
        status='online'
      >
        Children
      </Accordion>
    )

    expect(getByTestId('accordion-title').textContent).toBe('Title')
    expect(getByText('Children')).not.toBeUndefined()
  })
})
