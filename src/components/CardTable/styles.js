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
