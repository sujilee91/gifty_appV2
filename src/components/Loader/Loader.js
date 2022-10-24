import styled, { keyframes } from 'styled-components'
import { green_dark, green_light } from '../styles'

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`
const LoaderWrapper = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Load = styled.div`
  margin: auto;
  border: 5px solid ${green_light};
  border-radius: 50%;
  border-top: 5px solid ${green_dark};
  width: 20px;
  height: 20px;
  animation: spinner 1s linear infinite;
`

const Loader = () => <Load />

export default Loader
