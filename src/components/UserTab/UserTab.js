import React, { useMemo } from 'react'
import styled from 'styled-components'
import {
  Table,
  THeadRow,
  THead,
  green_light,
  green_main,
  green_dark,
  GeneralButton,
  yellow_main,
  red_dark,
  gray,
  ItemActionButton,
} from '../styles'
import {
  BsCheckCircleFill,
  BsDashCircleDotted,
  BsPlusCircleFill,
} from 'react-icons/bs'
import Loader from '../Loader'

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 728px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
`

const TabContent = styled.div`
  padding: 20px;
  border-left: 2px solid #3ab796;
  border-right: 2px solid #3ab796;
  border-bottom: 2px solid #3ab796;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  min-height: 25vh;
  overflow-y: auto;

  @media only screen and (max-width: 728px) {
    border: none;
    padding: 5px;
  }
`

const TabButton = styled(GeneralButton)`
  padding: 16px;
  vertical-align: middle;
  overflow: hidden;
  color: ${green_main};
  background-color: white;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: 20px;
  width: 100%;
  background-color: white;
  border: 2px solid ${green_light};
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
    background-color: ${green_main};
    border: 2px solid ${green_main};
`}

  @media only screen and (max-width: 728px) {
    padding: 10px;
    flex: 1 1 30%; /*grow | shrink | basis */
    height: 50px;
    border-radius: 5px;
    margin: 5px;
  }
`

const Row = styled.tr`
  padding: 5px;
  td {
    padding: 5px;
  }

  td:first-child {
    text-align: center;
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
  loading,
}) => {
  const usersList = ({ users }) => {
    return users.map((user) => {
      return (
        <TabButton
          selected={selectedUser && selectedUser.id === user.id}
          key={user.id}
          onClick={() => setSelectedUser(user)}
        >
          {user.name}
        </TabButton>
      )
    })
  }

  const items = ({ items }) => {
    return Object.keys(items).map((item) => {
      const { name, link, price, detail, purchased, id } =
        selectedUser.items[item]

      return (
        <Row key={id}>
          <td>
            {purchased ? (
              !purchasedItemsByCurrentUser()?.includes(`${id}`) ? (
                <BsCheckCircleFill color={yellow_main} size={20} />
              ) : (
                <BsCheckCircleFill color={green_dark} size={20} />
              )
            ) : (
              <BsCheckCircleFill color={gray} size={20} />
            )}
          </td>
          <td>${price ? price : 'N/A'}</td>
          <td>
            <a href={link} target="_blank" rel="noreferrer">
              {name ? name : 'N/A'}
            </a>
          </td>
          <td>{detail ? detail : 'N/A'}</td>
          <td>
            {loading ? (
              <Loader />
            ) : purchased ? (
              !purchasedItemsByCurrentUser()?.includes(`${id}`) ? (
                <div></div>
              ) : (
                <ItemActionButton
                  onClick={() =>
                    onUndoPurchase(currentUserId, selectedUser.id, id)
                  }
                  title="Undo"
                  isUndo={true}
                >
                  <div>
                    <BsDashCircleDotted color={red_dark} size={20} />
                  </div>
                  <div>Undo</div>
                </ItemActionButton>
              )
            ) : (
              <ItemActionButton
                onClick={() =>
                  onPurchase(
                    currentUserId,
                    selectedUser.id,
                    id,
                    currentUserPurchasedItem[selectedUser.id],
                  )
                }
                title="I got it!"
              >
                <div>
                  <BsPlusCircleFill color="white" size={20} />
                </div>
                <div>Take</div>
              </ItemActionButton>
            )}
          </td>
        </Row>
      )
    })
  }

  const UsersMemo = React.memo(usersList)
  const ItemsMemo = React.memo(items)

  const purchasedItemsByCurrentUser = () => {
    if (currentUserPurchasedItem) {
      return (
        currentUserPurchasedItem[selectedUser.id] &&
        Object.keys(currentUserPurchasedItem[selectedUser.id])
      )
    }

    return null
  }

  if (!selectedUser) return

  return (
    <div>
      <TabWrapper>
        <UsersMemo users={users} />
      </TabWrapper>
      <TabContent>
        <Table>
          <thead>
            <THeadRow>
              <THead width={5}>Status</THead>
              <THead width={10}>Price</THead>
              <THead width={30}>Name</THead>
              <THead width={40}>Detail</THead>
              <THead width={10}>Action</THead>
            </THeadRow>
          </thead>
          <tbody>
            {selectedUser?.items ? (
              <ItemsMemo items={selectedUser.items} />
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
