import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../../img/fullLogo.png'
import { onInputNumber } from '../../functions/onInputNumber'
import { GeneralButton, red_dark } from '../styles'
import Loader from '../Loader'
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

  @media only screen and (max-width: 728px) {
    width: 90vw;
    height: 90vh;
  }

  @media only screen and (min-width: 729px) and (max-width: 992px) {
    width: 60vw;
    height: 60vh;
  }
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const SubmitButton = styled(GeneralButton)`
  text-decoration: none;
  appearance: none;
  color: white;
  padding: 10px 25px;
  border-radius: 3px;
  cursor: pointer;
`

const InputField = styled.input`
  font-size: 35px;
  width: 100%;
  margin: 10px;
  border: none;
  border-bottom: 2px solid lightseagreen;
  text-align: center;
  :focus {
    outline: none;
    border: 2px solid green;
    border-radius: 5px;
  }
`

const InputFieldWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
`

const Logo = styled.img`
  width: 10vw;

  @media only screen and (max-width: 728px) {
    width: 50vw;
  }
`

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 728px) {
    text-align: center;
  }
`

const Error = styled.div`
  color: ${red_dark};
`

const Modal = ({ loading, usersList, setCurrentUser, setOpenModal }) => {
  const [error, setError] = useState()
  const code1Ref = useRef(null)
  const code2Ref = useRef(null)
  const code3Ref = useRef(null)
  const code4Ref = useRef(null)

  const handleOnClick = () => {
    const userCode =
      code1Ref.current.value * 1000 +
      code2Ref.current.value * 100 +
      code3Ref.current.value * 10 +
      code4Ref.current.value * 1

    const currentUser = usersList.find((user) => user.code === userCode)

    if (currentUser) {
      localStorage.setItem('code', userCode)
      setCurrentUser(currentUser)
      setOpenModal(false)
    } else {
      setError('Hmmmm... Wrong code! Please try again.')

      code1Ref.current.value = ''
      code2Ref.current.value = ''
      code3Ref.current.value = ''
      code4Ref.current.value = ''
      code1Ref.current.focus()
    }
  }

  const onKeyPress = (prevRef, currentRef, nextRef, e) => {
    onInputNumber(currentRef.current.value)
    e.preventDefault()
    if (e.which === 8) {
      if (currentRef.current.value) {
        currentRef.current.value = ''
      } else {
        prevRef.current.value = ''
        prevRef.current.focus()
      }
    } else if (e.key === 'Enter') {
      handleOnClick()
    } else {
      currentRef.current.value = e.key.replace(/[^0-9]/g, '')
      if (currentRef.current.value && nextRef) {
        nextRef.current.focus()
      }
    }
  }

  useEffect(() => {
    code1Ref.current.focus()
  }, [])

  return (
    <ModalWarpper>
      <ModalCard>
        <Content>
          <ContentHeader>
            <Logo src={logo} />
            <h1>Welcome to Gifty 2022</h1>
            <div>
              {error ? (
                <Error>{error}</Error>
              ) : (
                <div>Please enter the code :)</div>
              )}
            </div>
          </ContentHeader>

          <InputFieldWrapper>
            {loading ? (
              <Loader />
            ) : (
              <>
                <InputField
                  type="text"
                  pattern="[0-9]{1}"
                  required
                  ref={code1Ref}
                  maxLength={1}
                  onKeyDownCapture={(e) =>
                    onKeyPress(null, code1Ref, code2Ref, e)
                  }
                  inputMode="numeric"
                ></InputField>
                <InputField
                  type="text"
                  pattern="[0-9]{1}"
                  required
                  ref={code2Ref}
                  maxLength={1}
                  onKeyDownCapture={(e) =>
                    onKeyPress(code1Ref, code2Ref, code3Ref, e)
                  }
                  inputMode="numeric"
                ></InputField>
                <InputField
                  type="text"
                  pattern="[0-9]{1}"
                  required
                  ref={code3Ref}
                  onKeyDownCapture={(e) =>
                    onKeyPress(code2Ref, code3Ref, code4Ref, e)
                  }
                  maxLength={1}
                  inputMode="numeric"
                ></InputField>
                <InputField
                  type="text"
                  pattern="[0-9]{1}"
                  required
                  ref={code4Ref}
                  maxLength={1}
                  onKeyDownCapture={(e) =>
                    onKeyPress(code3Ref, code4Ref, null, e)
                  }
                ></InputField>
              </>
            )}
          </InputFieldWrapper>
          <SubmitButton onClick={handleOnClick} disabled={loading} primary>
            {loading ? <Loader /> : `Let's Go!`}
          </SubmitButton>
        </Content>
      </ModalCard>
    </ModalWarpper>
  )
}

export default Modal
