import React from 'react'
import OnboardSteps from '../components/OnboardSteps'
import clock from "../assets/clock.svg";
function Step3() {
  return (
    <OnboardSteps
    text="Protect it before its too late."
    thunder={clock}
    step={3}
    bg="bg-red"
    sendRoute='/signup'
  />
  )
}

export default Step3