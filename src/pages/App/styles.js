import styled from 'styled-components'
import { GeneralButton } from '../../components/styles'

export const AppWrapper = styled.div`
  position: relative;
  top: 0;
  max-width: 100vw;
  height: 100vh;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CardsWrapper = styled.div`
  position: relative;
  padding: 20px 40px;
  max-width: 1100px;
  margin: auto;
  @media only screen and (max-width: 728px) {
    padding: 0 20px 20px 20px;
  }
`

export const Header = styled.section`
  float: left;
  z-index: 999;
  left: 0;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  height: 100vh;
  width: 50px;
  transition: 0.5s;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  :hover {
    width: 250px;
  }

  @media only screen and (max-width: 728px) {
    box-shadow: none;
    position: relative;
  }
`
export const Button = styled(GeneralButton)`
  padding: 10px 15px;
`
