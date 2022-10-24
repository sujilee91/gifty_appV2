import styled, { keyframes } from 'styled-components'

const progress = keyframes`
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
`
const Load = styled.div`
  margin: auto;
  border: 20px solid #eaf0f6;
  border-radius: 50%;
  border-top: 20px solid #ff7a59;
  width: 200px;
  height: 200px;
  animation: spinner 4s linear infinite;
`

const Loader = () => <Load />

export default Loader
