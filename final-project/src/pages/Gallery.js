import React, { useEffect } from "react";
import { API, getMotos } from "../store/gallery/action";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Gallery = () => {
  const dispatch = useDispatch();
  const { motos, loadingMotos } = useSelector((state) => state.MotosReducer);

  const deleteMoto = (id, model) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: `Vamos a borrar a ${model} y esta acción no es reversible`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        API.delete(`http://localhost:3000/motos/${id}`);
        Swal.fire(
          `¡${model} ha sido borrado!`,
          "Tu moto ha sido borrada",
          "ok",
          window.location.reload(false)
        );
      }
    });
  };

  useEffect(() => {
    dispatch(getMotos());
  }, []);
  //   useEffect(()=> {
  //     dispatch(DeleteMotos())
  //   } ,[])

  return (
    <Container>
      {console.log(motos, "motos")}
      {motos.map((moto) => {
        {
          /* console.log(moto.id) */
        }
        return (
          <Card className="px-4 py-2 mb-3">
            <Link to={`/gallery/${moto.id}`}>
              <Card.Title key={moto.id}>{moto.model}</Card.Title>
            </Link>
            <img src={moto.image} alt={moto.model} />

            <Button
              bg="dark"
              variant="dark"
              onClick={(e) => deleteMoto(moto.id)}
            >
              {" "}
              Delete{" "}
            </Button>
          </Card>
        );
      })}
    </Container>
  );
};

export default Gallery;
