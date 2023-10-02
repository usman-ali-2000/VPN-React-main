import React from 'react'
import OnboardSteps from '../components/OnboardSteps'
import thunder from "../assets/thunder.svg";
function Step1() {
  return (
    <OnboardSteps
    text="Privacy is one of life’s requirements"
    thunder={thunder}
    step={1}
    sendRoute='/board2'
    bg="bg-primary"
  />
  )
}

export default Step1