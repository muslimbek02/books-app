import {Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import Login from './components/Login'
import SignUp from './components/SignUp'




export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

