import React from 'react'
import OnboardSteps from '../components/OnboardSteps'
import lock from "../assets/lock.png";
function Step2() {
  return (
    <OnboardSteps
    text="Our Commitment is Keeping you Safe."
    thunder={lock}
    step={2}
    sendRoute='/board3'
    bg="bg-orange"
  />
  )
}

export default Step2