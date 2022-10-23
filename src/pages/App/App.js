import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserCard from '../../components/UserCard'
import DashGrid from '../../components/DashGrid'
import Modal from '../../components/Modal'
import recieve from '../../img/recieve.png'
import sent from '../../img/sent.png'
import spent from '../../img/spent.png'
import { useGetUsers } from './useGetUsers'
import CardTable from '../../components/CardTable'
import CurrentUser from '../../components/CurrentUser'
import UserTab from '../../components/UserTab'
const dashList = [
  { name: 'Recieved Gifts', image: recieve },
  { name: 'Sent Gifts', image: sent },
]

const AppWrapper = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  height: 100vh;
`

const CardsWrapper = styled.div`
  padding: 40px;
`

const MyList = styled.div`
  padding-bottom: 10px;
`

const Header = styled.header`
  width: 100vw;
  background-color: black;
`

const AddNewButton = styled.button`
  width: 100%;
  text-decoration: none;
  appearance: none;
  color: green;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid green;
  cursor: pointer;
`

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [usersList, setUsersList] = useState([])
  const {
    data,
    error,
    loading,
    useAddItem,
    useRemoveItem,
    usePurchaseCheckItem,
  } = useGetUsers(setCurrentUser)
  const userCode = localStorage.getItem('code')

  useEffect(() => {
    if (!userCode) {
      setOpenModal(true)
    }

    if (!data) return

    if (currentUser && data) {
      const newData = { ...data }
      delete newData[currentUser.id]

      const foundUser = Object.values(data).find(
        (user) => `${user.code}` === userCode,
      )
      setUsersList(Object.values(newData))
    } else {
      const foundUser = Object.values(data).find(
        (user) => `${user.code}` === userCode,
      )

      if (foundUser) {
        setCurrentUser(foundUser)
        const newData = { ...data }
        delete newData[foundUser.id]

        setUsersList(Object.values(newData))
      }
    }
  }, [data, userCode, currentUser, localStorage])

  return (
    <AppWrapper>
      <Header></Header>
      {openModal && !currentUser ? (
        <Modal
          loading={loading}
          usersList={usersList}
          setCurrentUser={setCurrentUser}
          setOpenModal={setOpenModal}
        />
      ) : (
        <CardsWrapper>
          {currentUser && (
            <CurrentUser
              user={currentUser}
              onAddItem={useAddItem}
              onRemoveItem={useRemoveItem}
            />
          )}

          {/* {usersList.map((user) => {
            return (
              <div key={user.name}>
                <UserCard user={user} />
              </div>
            )
          })} */}
          {usersList && currentUser && (
            <UserTab
              users={usersList}
              currentUserPurchased={currentUser?.purchasedItem}
              onPurchase={usePurchaseCheckItem}
              currentUserId={currentUser?.id}
            />
          )}
        </CardsWrapper>
      )}

      {/* <DashGrid dashItems={dashList} /> */}
    </AppWrapper>
  )
}

export default App
