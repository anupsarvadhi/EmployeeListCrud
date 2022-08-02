import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainList from './componant/ListType/MainList'
import { Routes, Route, Navigate } from 'react-router-dom'
import Card from './componant/GridType/Card'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/employee" />} />
        <Route path="/employee" element={<MainList />} />
        <Route path="/employee/:id" element={<Card />} />
      </Routes>
    </>
  )
}

export default App
