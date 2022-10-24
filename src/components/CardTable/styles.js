import styled from 'styled-components'
import { GeneralButton, red_dark } from '../styles'

export const NameCol = styled.th`
  text-align: left;
  background-color: #dddddd;
`

export const InputField = styled.input`
  width: -webkit-fill-available;
  font-size: 18px;
  padding: 5px;
`

export const TextArea = styled.textarea`
  width: 95%;
  font-size: 15px;
`

export const DeleteButton = styled(GeneralButton)`
  width: 100%;
  background-color: ${red_dark};
  border: 2px solid white;
  color: white;
  border-radius: 5px;

  :disabled {
    background-color: gray;
    border: 2px solid gray;
    color: white;
    cursor: not-allowed;
  }
`
export const AddItemRow = styled.tr`
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`
