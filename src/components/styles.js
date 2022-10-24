import styled from 'styled-components'

export const colors = {
  green_dark: '#036749',
  green_light: '#88D498',
  green_main: '#1A936F',
  yellow_dark: '#DDA416',
  yellow_main: '#EDC154',
  yellow_light: '#F3E9D2',
  red_dark: '#CB402F',
  red_main: '#ED6A5A',
  red_light: ' #FC9184',
  gray: '#DDDDDD',
}

export const green_dark = '#036749'
export const green_light = '#88D498'
export const green_main = '#1A936F'
export const yellow_dark = '#DDA416'
export const yellow_main = '#EDC154'
export const yellow_light = '#F3E9D2'
export const red_dark = '#CB402F'
export const red_main = '#ED6A5A'
export const red_light = ' #FC9184'
export const gray = '#DDDDDD'

export const sm_max = 576
export const md_min = sm_max + 1
export const md_max = 768
export const lg_min = md_max + 1
export const lg_max = 992
export const xl_min = 1200

export const GeneralButton = styled.button`
  display: inline-block;
  text-decoration: none;
  appearance: none;
  font-family: 'Poppins';
  color: white;
  background-color: ${green_main};
  text-align: center;
  cursor: pointer;
  border: 2px solid ${green_main};
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;

  ${({ primary }) =>
    primary &&
    `
    min-height: 53px;

    :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.15);
  }
  `}

  :disabled {
    cursor: not-allowed;
    background-color: ${green_light};
    color: darkgray;
    border: 2px solid ${green_main};
    box-shadow: none;
  }
`

export const RoundButton = styled(GeneralButton)`
  border-radius: 30px;
  padding: 0 20px;
  width: 80%;
  background-color: white;
  border: 2px solid ${green_main};
`

export const WarningButton = styled(GeneralButton)`
  background-color: white;
  border: 2px solid ${red_dark};
  color: ${red_dark};

  :disabled {
    background-color: ${gray};
    border: 2px solid ${gray};
    color: white;
    cursor: not-allowed;
  }
`

export const ItemActionButton = styled(GeneralButton)`
  border-radius: 50px;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;

  ${({ isUndo }) =>
    isUndo &&
    `border: 2px dotted ${red_dark}; background-color: white; color: ${red_dark};`}

  :disabled {
    cursor: not-allowed;
    background-color: ${gray};
    border: 2px solid ${gray};
    color: black;
  }

  div {
    margin: 0 10px;
  }
`

export const Table = styled.table`
  width: 100%;
  min-width: 800px;

  td {
    padding: 0 5px;
  }
  td :last-child {
    padding: 0 10px;
  }
`

export const THead = styled.th`
  text-align: left;
  background-color: #dddddd;
  width: ${({ width }) => `${width}%`};
  padding: 10px;
  font-weight: 500;
`

export const THeadRow = styled.tr`
  th:first-child {
    border-top-left-radius: 4px;
  }

  th:last-child {
    border-top-right-radius: 4px;
  }
`
