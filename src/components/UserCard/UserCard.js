import React from 'react'
import { Card, ImgSection, UserInfoSection, Name } from './styles'

const UserCard = (user) => {
  return (
    <Card>
      <ImgSection img={'babc'} />
      <UserInfoSection>
        <Name>Name</Name>
        <br />
        <span>user id</span>
        <br />
        <span>folowwer</span>
        <br />
        <span>following</span>
        <br />
      </UserInfoSection>
    </Card>
  )
}

export default UserCard
