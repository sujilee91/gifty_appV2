import styled from 'styled-components'

export const Card = styled.div`
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
`

export const ImgSection = styled.img`
  width: 120px;
  height: 120px;
  border: none;
  background-color: red;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`

export const UserInfoSection = styled.div`
  padding: 20px;
`

export const Name = styled.span`
  font-size: 2em;
`
