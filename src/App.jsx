
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage.jsx/';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<HomePage />}></Route>
          <Route path = '/dashboard' element={<Dashboard />}></Route>
          <Route path = '/login' element={<Login />}></Route>
          <Route path = '/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
