import React, { useEffect } from "react";
import {  getMotos } from "../store/gallery/action"
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Gallery = () => {
  const dispatch = useDispatch();
  const { motos, loadingMotos } = useSelector((state)=>
    state.MotosReducer
  );
  useEffect(()=> {
    dispatch(getMotos())
  },[])
//   useEffect(()=> {
//     dispatch(DeleteMotos())
//   } ,[])


  return (
    <Container>
        {console.log(motos, 'motos')}
        {motos?.map((moto)=>{
            {/* console.log(moto.id) */}
            return(
                <Card className='px-4 py-2 mb-3'>
                    <Link to={`/gallery/${motos.id}`}><Card.Title>{moto.model}</Card.Title></Link>
                    <img src= {moto.image} alt={moto.model}/>
                    <Button bg='dark' variant='dark'>Edit</Button>
                    <Button bg='dark' variant='dark' >Delete</Button>
                </Card>
            )
        })}
    </Container>
  )
};

export default Gallery;
