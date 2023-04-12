import React from 'react'
import { MainButton } from './components/styled_components/buttons.js'

export const App = () => {
  return (
    <div className="background">
      <div className="welcome">
        <h2>Welcome to Word Game!</h2>
        <MainButton>Click me</MainButton>
      </div>
    </div>
  )
}
