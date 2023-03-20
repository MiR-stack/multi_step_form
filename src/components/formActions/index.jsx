

import React from 'react'
import { Back, Confirm, Container, Next } from './index.styled'

function FormActions({step,handleNext,handleBack,type}) {
  return (
    <Container>
        {step >1 && <Back onClick={handleBack}>go back</Back>} 
        {step <4 && <Next type={type || 'text'} onClick={handleNext}> next page</Next>}
        {step === 4 && <Confirm>confirm</Confirm>}

    </Container>
  )
}

export default FormActions