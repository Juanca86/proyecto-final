import React, { useEffect } from 'react'
import { getMoto } from '../../store/gallery/action'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const MotoComponent = () => {
    const params = useParams()
    const {moto, loadingMoto} = useSelector((state) => state.MotosReducer)
    const dispatch = useDispatch()

useEffect(() => {
    dispatch(getMoto(params.id))
    }, [])

  return (
    <div>{moto.model} {moto.image} {moto.price} </div>
  )
}

export default MotoComponent