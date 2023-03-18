

import React from 'react'
import { Back, Confirm, Container, Next } from './index.styled'

function FormActions({step,handleNext,handleBack}) {
  return (
    <Container>
        {step >1 && <Back onClick={handleBack}>go back</Back>} 
        {step <4 && <Next onClick={handleNext}> next page</Next>}
        {step === 4 && <Confirm>confirm</Confirm>}

    </Container>
  )
}

export default FormActions