import styled from 'styled-components'

const StyledSolidButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  color: black;
  padding: 7px 10px;
  margin: 5px;
  transition: 0.75s all ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: black;
    border: 1px solid black;
    color: #fff;
  }

  ${(props) =>
    props.type === 'primary' &&
    `
      background: #3535b2;
      color: #fff;
      &:hover {
        background: #fff;
        border: 1px solid #3535b2;
        color: #3535b2;
      }
    `}

  ${(props) =>
    props.type === 'danger' &&
    `
      background: #b21111;
      color: #fff;
      &:hover {
        background: #fff;
        border: 1px solid #b21111;
        color: #b21111;
      }
    `}

  ${(props) =>
    props.type === 'success' &&
    `
      background: #46a346;
      color: #fff;
      &:hover {
        background: #fff;
        border: 1px solid #46a346;
        color: #46a346;
      }
    `}
`

export default StyledSolidButton
