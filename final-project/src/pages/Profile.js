import React from 'react'
import { Container, Form, FormGroup, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Profile = () => {
        const {user} = useSelector((state)=> state.AuthReducer)

  return (
    <Container>
        <Form>
            <FormGroup>
                <label>Usuario: </label>
                {user.username}
            </FormGroup>
            <FormGroup>
                <label>Id: </label>
                {user.id}
            </FormGroup>
            <FormGroup>
                <label>Email: </label>
                {user.email}
            </FormGroup>
            <Image src={user.image}/>
        </Form>
    </Container>
  )
}

export default Profile