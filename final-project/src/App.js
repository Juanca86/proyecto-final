import NavComponent from './components/NavComponent/NavComponent'
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { useSelector } from 'react-redux';
import Register from './pages/Register';
import Crud from './pages/Crud';
import Gallery from './pages/Gallery';
import MotoComponent from './components/Moto/MotoComponent';
import { useTranslation } from 'react-i18next'; 
import { Suspense } from 'react';

function Welcome(){
  const {t,i18n} = useTranslation(["welcome"])
  const {user} = useSelector((state)=> state.AuthReducer)
  return(
    <div className="App">
      <NavComponent/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/gallery' element={<Gallery/>}></Route>
        <Route exact path='/gallery/:id' element={<MotoComponent/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/profile' element={user && user.id? <Profile/>: <Navigate to='/login' replace></Navigate>}></Route>
        <Route exact path='/crud' element={<Crud/>}></Route>
      </Routes>
    </div>

  )
}

function App() {
  return (
    <Suspense fallback="Cargando idiomas">
      <Welcome/>
    
    </Suspense>
  );
}

export default App;
