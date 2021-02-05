import React from 'react'
import StyledSolidButton from './components/StyledSolidButton'

const SolidButton = ({ onClick, props, txt, type }) => {
  return (
    <>
      <StyledSolidButton onClick={onClick} {...props} type={type}>
        {txt}
      </StyledSolidButton>
    </>
  )
}

export default SolidButton
