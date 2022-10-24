import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-radius: 15px;
`

export const THead = styled.th`
  text-align: left;
  background-color: #dddddd;
  width: ${({ width }) => `${width}%`};
  padding: 10px;
  font-weight: 500;
`

export const NameCol = styled.th`
  text-align: left;
  background-color: #dddddd;
`

export const InputField = styled.input`
  width: -webkit-fill-available;
`

export const TextArea = styled.textarea`
  width: 95%;
  font-size: 15px;
`

export const DeleteButton = styled.button`
  width: 100%;
  background-color: white;
  border: 2px solid #ed5a6a;
  color: #ed5a6a;

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

export const Row = styled.tr`
  th:first-child {
    border-top-left-radius: 4px;
  }

  th:last-child {
    border-top-right-radius: 4px;
  }
`
