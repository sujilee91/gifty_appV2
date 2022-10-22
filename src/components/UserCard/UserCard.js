import React from 'react'
import {
  Card,
  ImgSection,
  UserInfoSection,
  Name,
  CardTitle,
  CardDetails,
  CardTable,
  THead,
} from './styles'

const UserCard = ({ user }) => {
  // return (
  //   <Card>
  //     <ImgSection img={'babc'} />
  //     <UserInfoSection>
  //       <Name>Name</Name>
  //       <br />
  //       <span>user id</span>
  //       <br />
  //       <span>folowwer</span>
  //       <br />
  //       <span>following</span>
  //       <br />
  //     </UserInfoSection>

  //   </Card>
  // )

  return (
    <Card>
      <CardTitle>{user}</CardTitle>
      <CardDetails>
        <CardTable>
          <thead>
            <tr>
              <THead width={5}>Link</THead>
              <THead width={10}>Price</THead>
              <THead width={25}>Name</THead>
              <THead width={40}>Detail</THead>
              <THead width={5}>Purchased</THead>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>V</td>
            </tr>
          </tbody>
        </CardTable>
      </CardDetails>
    </Card>
  )
}

export default UserCard
