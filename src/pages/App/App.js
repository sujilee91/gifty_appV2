import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '../../components/Modal'
import { useGetUsers } from './useGetUsers'
import CurrentUser from '../../components/CurrentUser'
import UserTab from '../../components/UserTab'
import logo from '../../img/fullLogo.png'
import Loader from '../../components/Loader'
import Image from 'next/image'

import {
  Button,
  AppWrapper,
  Sidebar,
  CardsWrapper,
  HeaderWrapper,
  Main,
} from './styles'

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
  }, [data, currentUser, openModal])

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
          {/* <Sidebar>
            <Image src={logo} width={80} />
            <HeaderWrapper>
              <h3>Hi, {currentUser?.name}!</h3>
              <Button onClick={() => onLogout()} primary>
                Logout
              </Button>
            </HeaderWrapper>
          </Sidebar> */}
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
    </AppWrapper>
  )
}

export default App
