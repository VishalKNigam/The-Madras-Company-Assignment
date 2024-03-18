import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar'
import Welcome from './pages/Welcome'
import styled from 'styled-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainContainer>
      <SideBar />
      <Welcome />
    </MainContainer>
  )
}

export default App;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
