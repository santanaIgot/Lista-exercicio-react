import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Cabecalho from './Componentes/Cabecalho'

function App() {


  return (
    <>
      <Cabecalho/>
      <Outlet/>
    </>
  )
}

export default App
