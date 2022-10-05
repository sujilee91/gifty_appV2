import React from 'react'

import { DashCard, DashImage, DashTitle } from './styles'

const DashGrid = ({ dashItems }) => {
  return (
    <div>
      {dashItems.map((item) => (
        <div key={item.name}>
          <DashCard>
            <DashImage src={item.image} />
            <DashTitle>{item.name}</DashTitle>
          </DashCard>
        </div>
      ))}
    </div>
  )
}

export default DashGrid
