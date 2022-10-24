import React, { useState } from 'react'
import { CardTitle, CardDetails } from './styles'
import CardTable from '../CardTable'

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardTitle>{user.name}</CardTitle>
      <CardDetails>
        <CardTable user={user} />
      </CardDetails>
    </Card>
  )
}

export default UserCard
