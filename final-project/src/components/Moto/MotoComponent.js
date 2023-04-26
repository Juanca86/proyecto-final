import React, { useEffect } from "react";
import { EditMoto, getMoto } from "../../store/gallery/action";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";

const MotoComponent = () => {
  const params = useParams();
  const { moto, loadingMoto } = useSelector((state) => state.MotosReducer);
  const dispatch = useDispatch();

  function comentar() {
    dispatch(EditMoto(moto.id, moto.comment));
  }

  useEffect(() => {
    dispatch(getMoto(params.id));
  }, []);

  return (
    <Container>
      {moto.model}
      <br /> {moto.price}
      <br />
      <img className="moto" src={moto.image} alt={moto.model} />
      <br />
      {moto.comentario}
      <br />
      <textarea
        onChange={(e) => {
          moto.comment = e.target.value;
        }}
      ></textarea>
      <br />
      <Button bg="dark" variant="dark" onClick={() => comentar(moto)}>
        Añadir comentario
      </Button>
      <style>
        {`.moto {
                  max-width: 100%;
                  height: 300px;
                                    
                }`}
      </style>
    </Container>
  );
};

export default MotoComponent;
