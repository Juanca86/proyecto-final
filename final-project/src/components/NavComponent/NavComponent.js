import React from 'react';
// import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../store/auth/action';


const NavComponent = () => {
  const {user} = useSelector((state)=> state.AuthReducer)

  const dispatch = useDispatch()
  function closeSession(){
    dispatch(doLogout())
  }

  return(
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          Motos
        </Navbar.Brand>
        <Nav>
          <Link className='nav-link' to='/'>Home</Link>

          {user && user.id? <Link className='nav-link' to='/gallery'>Galeria</Link>: ''} 
          {user && user.id? '': <Link className='nav-link' to='/login'>Login</Link> } 
          {user && user.id? '': <Link className='nav-link' to='/register'>Registrar</Link> } 
          {user && user.id? <Link className='nav-link' to='/profile'>Perfil</Link> :'' }  
          {user && user.id? <Link className='nav-link' to='/crud'>Registrar Producto</Link> :'' }  
          {user && user.id? <Link onClick={closeSession} className='nav-link'>Logout</Link>: ''}
        </Nav>
      </Container>
    </Navbar>
  )
}

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
