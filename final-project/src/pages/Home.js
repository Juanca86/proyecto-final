import { Container, Image } from "react-bootstrap";
import backgroundImage from "../assets/images/1_6344.jpg";
import { useSelector } from "react-redux";

export default function Home(){
    const {user} = useSelector((state)=> state.AuthReducer)

    return(
        <Container>
            <h1>Home</h1>
            {user && user.id? <h2> Bienvenid@ {user.username} </h2>: 'no estas logeado'  }
            <Image className="container" src={backgroundImage} alt="RickYMorty"/>            
        </Container>
    )
}