import React, { useState } from 'react'
import {
  Card,
  ImgSection,
  UserInfoSection,
  Name,
  CardTitle,
  CardDetails,
  THead,
} from './styles'
import CardTable from '../CardTable'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const UserCard = ({ user }) => {
  const [newItem, setNewItem] = useState({})
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
