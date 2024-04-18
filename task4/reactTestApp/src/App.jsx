import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './components/UserList/UserList'
import { CountdownTimer } from './components/CountdownTimer/CountdownTimer'
import { WindowSize } from './components/WindowSize/WindowSize'

function App() {

  return (
    <>
      <CountdownTimer/>
      <UserList/>
      <WindowSize/>
    </>
  )
}

export default App
