import React, { useEffect } from 'react'
import { EditMoto, getMoto } from '../../store/gallery/action'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const MotoComponent = () => {
    const params = useParams()
    const {moto, loadingMoto} = useSelector((state) => state.MotosReducer)
    const dispatch = useDispatch()

    function comentar(){
        dispatch(EditMoto(moto.id, moto.comment))
    }


useEffect(() => {
    dispatch(getMoto(params.id))
    }, [])

  return (
    <div>{moto.model}  {moto.price} 
    <img src={moto.image} alt={moto.model} />
    <textarea onChange={(e)=> {moto.comment = e.target.value}} ></textarea>
    <Button bg='dark' variant='dark' onClick={()=> comentar(moto)}>Añadir comentario</Button>
    </div>
  )
}

export default MotoComponent