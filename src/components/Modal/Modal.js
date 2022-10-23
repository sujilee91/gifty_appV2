import React, { useRef } from 'react'
import styled from 'styled-components'

const ModalWarpper = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
const ModalCard = styled.div`
  background-color: white;
  width: 30%;
  height: 50%;
  padding: 20px;
  border-radius: 15px;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const SubmitButton = styled.button`
  text-decoration: none;
  appearance: none;
  color: green;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid green;
  cursor: pointer;
`

const InputField = styled.input`
  font-size: 35px;
  max-width: 200px;
`
const Modal = ({ loading, usersList, setCurrentUser, setOpenModal }) => {
  const inputEl = useRef(null)
  const handleOnClick = () => {
    localStorage.setItem('code', inputEl.current.value)
    const currentUser = usersList.find(
      (user) => user.code === inputEl.current.value,
    )

    setCurrentUser(currentUser)
    setOpenModal(false)
  }

  return (
    <ModalWarpper>
      <ModalCard>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Content>
            <div>
              <h1>Welcome to Gifty 2022</h1>
              <p>Please enter the code :)</p>
            </div>

            <InputField ref={inputEl} required />
            <SubmitButton onClick={handleOnClick}>Submit</SubmitButton>
          </Content>
        )}
      </ModalCard>
    </ModalWarpper>
  )
}

export default Modal
