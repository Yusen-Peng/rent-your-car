import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './pages/Layout'
import SignupPage from './pages/SignupPage'

function App() {

  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={'/'} element={<IndexPage/>}/>
        <Route path={"/login"} element={<LoginPage/>}/>
        <Route path={"/signup"} element={<SignupPage/>}/>
      </Route>
    </Routes>

  )
}

export default App
