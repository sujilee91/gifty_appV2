import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '../../components/Modal'
import { useGetUsers } from './useGetUsers'
import CurrentUser from '../../components/CurrentUser'
import UserTab from '../../components/UserTab'
import logo from '../../img/fullLogo.png'
import { GeneralButton } from '../../components/styles'
import Loader from '../../components/Loader'

const AppWrapper = styled.div`
  position: relative;
  top: 0;
  max-width: 100vw;
  height: 100vh;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CardsWrapper = styled.div`
  padding: 20px 40px;
  max-width: 1100px;
  margin: auto;
  @media only screen and (max-width: 728px) {
    padding: 0 20px 20px 20px;
  }
`

const Header = styled.div`
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;

  img {
    width: 80px;
  }

  @media only screen and (max-width: 728px) {
    box-shadow: none;
    position: relative;
  }
`
const Button = styled(GeneralButton)`
  padding: 10px 15px;
`

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [usersList, setUsersList] = useState([])
  const [selectedUser, setSelectedUser] = useState()

  const {
    data,
    error,
    loading,
    useAddItem,
    useRemoveItem,
    usePurchaseCheckItem,
    useUndoPurchaseCheckItem,
  } = useGetUsers(setCurrentUser)

  const onLogout = () => {
    localStorage.removeItem('code')
    setOpenModal(true)
    setCurrentUser(null)
    setSelectedUser(null)
  }

  useEffect(() => {
    const userCode = localStorage.getItem('code')

    if (!userCode) {
      setOpenModal(true)
    }

    if (!data) return

    if (currentUser && data) {
      const newData = { ...data }
      delete newData[currentUser.id]

      setUsersList(Object.values(newData))
      if (!selectedUser) {
        setSelectedUser(Object.values(newData)[0])
      } else {
        setSelectedUser(newData[selectedUser.id])
      }
    } else {
      const foundUser = Object.values(data).find(
        (user) => `${user.code}` === userCode,
      )

      if (foundUser) {
        setCurrentUser(foundUser)
        const newData = { ...data }
        delete newData[foundUser.id]

        setUsersList(Object.values(newData))
      } else {
        setUsersList(Object.values(data))
      }
    }
  }, [data, currentUser, localStorage, openModal])

  useEffect(() => {
    if (error) {
      alert(`${error}`)
    }
  }, [error])

  return (
    <AppWrapper>
      {openModal && !currentUser ? (
        <Modal
          loading={loading}
          usersList={usersList}
          setCurrentUser={setCurrentUser}
          setOpenModal={setOpenModal}
        />
      ) : (
        <>
          <Header>
            <img src={logo} />
            <HeaderWrapper>
              <h3>Hi, {currentUser?.name}!</h3>
              <Button onClick={() => onLogout()} primary>
                Logout
              </Button>
            </HeaderWrapper>
          </Header>
          <CardsWrapper>
            {currentUser || loading ? (
              <CurrentUser
                user={currentUser}
                onAddItem={useAddItem}
                onRemoveItem={useRemoveItem}
                setOpenModal={setOpenModal}
                setCurrentUser={setCurrentUser}
                loading={loading}
              />
            ) : (
              <Loader />
            )}
            <h1>Family Wishlist</h1>
            {usersList && currentUser ? (
              <UserTab
                users={usersList}
                currentUserPurchasedItem={currentUser?.purchasedItem}
                onPurchase={usePurchaseCheckItem}
                currentUserId={currentUser?.id}
                onUndoPurchase={useUndoPurchaseCheckItem}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                loading={loading}
              />
            ) : (
              <Loader />
            )}
          </CardsWrapper>
        </>
      )}

      {/* <DashGrid dashItems={dashList} /> */}
    </AppWrapper>
  )
}

export default App
