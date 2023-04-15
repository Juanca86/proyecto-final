import NavComponent from './components/NavComponent/NavComponent'
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CharactersComponent from './components/CharactersComponent/CharactersComponent';
import LocationsComponent from './components/LocationsComponent/LocationsComponent';
import EpisodesComponent from './components/EpisodesComponent/EpisodesComponent';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { useSelector } from 'react-redux';
import Register from './pages/Register';

function App() {
    const {user} = useSelector((state)=> state.AuthReducer)
  return (
    <div className="App">
      <NavComponent/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/characters' element={<CharactersComponent/>}></Route>
        <Route exact path='/locations' element={<LocationsComponent/>}></Route>
        <Route exact path='/episodes' element={<EpisodesComponent/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/profile' element={user && user.id? <Profile/>: <Navigate to='/login' replace></Navigate>}></Route>
      </Routes>
    </div>
  );
}

export default App;
