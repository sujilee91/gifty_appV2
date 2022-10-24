import { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
`

export const THead = styled.th`
  text-align: left;
  background-color: #dddddd;
  width: ${({ width }) => `${width}%`};
  padding: 5px;
  font-weight: 500;
`

export const NameCol = styled.th`
  text-align: left;
  background-color: #dddddd;
`

export const InputField = styled.input`
  width: 90%;
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
  border-left: 2px solid #3ab796;
  border-right: 2px solid #3ab796;
  border-bottom: 2px solid #3ab796;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  min-height: 25vh;
`

const TabButton = styled.button`
  border: none;
  display: inline-block;
  padding: 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: #3ab796;
  background-color: white;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: 20px;
  width: 100%;
  background-color: white;
  border: 2px solid #3ab796;
  border-radius: unset;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 18px;

  ${({ selected }) =>
    selected &&
    `
    font-size: 20px;
    font-weight: bolder;
    border-bottom: none;
    color: white;
    background-color: #3ab796;
`}
`
const THeadRow = styled.tr`
  position: sticky;
  top: 0;
  th:first-child {
    border-top-left-radius: 4px;
  }

  th:last-child {
    border-top-right-radius: 4px;
  }
`
const Row = styled.tr`
  padding: 5px;
  td {
    padding: 5px;
  }

  td:last-child {
    text-align: center;
    input {
      width: 20px;
    }

    input
  }
`
const UserTab = ({
  users,
  currentUserPurchasedItem,
  onPurchase,
  currentUserId,
  onUndoPurchase,
  selectedUser,
  setSelectedUser,
}) => {
  const purchasedItemsByCurrentUser = () => {
    if (currentUserPurchasedItem) {
      return Object.keys(currentUserPurchasedItem[selectedUser.id])
    }

    return null
  }

  if (!selectedUser) return

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
            <THeadRow>
              <THead width={10}>Price</THead>
              <THead width={30}>Name</THead>
              <THead width={40}>Detail</THead>
              <THead width={5}>Purchased</THead>
            </THeadRow>
          </thead>
          <tbody>
            {/* Purchased => purchased by current user => editable / IF NOT => un-editable
                How to tell? current user should have purchased Item list
            */}
            {selectedUser?.items ? (
              <>
                {Object.keys(selectedUser?.items).map((item) => {
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
                      <td>${price ? price : 'N/A'}</td>
                      <td>
                        <a href={`https://${link}`} target="_blank">
                          {name ? name : 'N/A'}
                        </a>
                      </td>
                      <td>{detail ? detail : 'N/A'}</td>
                      <td>
                        {purchased ? (
                          !purchasedItemsByCurrentUser()?.includes(`${id}`) ? (
                            <button disabled onClick={() => null}>
                              Taken!
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                onUndoPurchase(
                                  currentUserId,
                                  selectedUser.id,
                                  id,
                                )
                              }
                            >
                              Undo Purchase
                            </button>
                          )
                        ) : (
                          <button
                            onClick={() =>
                              onPurchase(currentUserId, selectedUser.id, id)
                            }
                          >
                            Purchased
                          </button>
                        )}
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
