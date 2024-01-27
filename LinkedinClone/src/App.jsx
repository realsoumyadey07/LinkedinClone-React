
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { useState } from 'react';
function App() {
  const [login, setLogin] =useState('login');

  return (
    <>
      <Routes>
        <Route path='' element={
        <>
        {login==='login'?<Login/>:<Login/>}
        </>}/>
        <Route path='/home' element={
          <>
          <Header/>
          <Home/>
          </>
        }/>
      </Routes>

    </>
  )
}

export default App
