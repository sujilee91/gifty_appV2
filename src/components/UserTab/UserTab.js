import { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
`

export const THead = styled.th`
  text-align: left;
  background-color: #dddddd;
  width: ${({ width }) => `${width}%`};
`

export const NameCol = styled.th`
  text-align: left;
  background-color: #dddddd;
`

export const InputField = styled.input`
  width: 90%;
  font-size: 25px;
`

export const TextArea = styled.textarea`
  width: 95%;
  font-size: 15px;
`

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const TabContent = styled.div`
  padding: 20px;
  border-left: 1px solid blue;
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;

  min-height: 50vh;
`

const TabButton = styled.button`
  border: none;
  display: inline-block;
  padding: 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: white;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: 20px;
  width: 100%;

  border: 1px solid blue;

  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  ${({ selected }) =>
    selected &&
    `
    border-bottom: none;
    color: blue;
`}
`

const Row = styled.tr`
  padding: 5px;
`
const UserTab = ({ users, currentUserPurchased }) => {
  const [selectedUser, setSelectedUser] = useState()
  useEffect(() => {
    if (users && !selectedUser) setSelectedUser(users[0])
  }, [users])

  return (
    <div>
      <TabWrapper>
        {users.map((user) => {
          return (
            <TabButton
              selected={selectedUser && selectedUser.id === user.id}
              key={user.id}
              onClick={() => setSelectedUser(user)}
            >
              {user.name}
            </TabButton>
          )
        })}
      </TabWrapper>
      <TabContent>
        <Table>
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
            {/* Purchased => purchased by current user => editable / IF NOT => un-editable
                How to tell? current user should have purchased Item list
            */}
            {selectedUser?.items ? (
              <>
                {Object.keys(selectedUser?.items).map((item) => {
                  const purchasedItemsByCurrentUser = Object.keys(
                    currentUserPurchased[selectedUser.id],
                  )
                  console.log(purchasedItemsByCurrentUser)
                  const {
                    name,
                    description,
                    link,
                    price,
                    detail,
                    purchased,
                    id,
                  } = selectedUser.items[item]
                  return (
                    <Row key={id}>
                      <td>
                        {/* CHECKER FOR INCLUDE HTTPS */}
                        <a href={`https://${link}`} target="_blank">
                          Link
                        </a>
                      </td>
                      <td>{price ? price : 'N/A'}</td>
                      <td>{name ? name : 'N/A'}</td>
                      <td>{detail ? detail : 'N/A'}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={purchased}
                          onChange={() => {
                            console.log('clicked')
                          }}
                          disabled={
                            purchased &&
                            !purchasedItemsByCurrentUser.includes(`${id}`)
                          }
                        />
                      </td>
                    </Row>
                  )
                })}
              </>
            ) : (
              <></>
            )}
          </tbody>
        </Table>
      </TabContent>
    </div>
  )
}

export default UserTab
