import axios from "axios"
import  React, {useEffect, useState}  from "react"
import styled from "styled-components"
import Container from "./Container";
import Filme from "./Filme";

function Inicio(){
    const [filmes, setFilmes] = useState([]);
    useEffect(()=> {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const promise = axios.get(URL)
    promise.then((response) =>{const {data} = response; setFilmes(data);});
    promise.catch((err) => {alert("Eita!!, falhou")})
    },[])
    function expondoFilmes(){
       if(filmes.length > 0){
           return filmes.map(({posterURL, id}) => <Filme key={id} id = {id} poster = {posterURL}/>);
          } else {
           return <p>pera que ta carregando :|</p>
          }
    }
    const filmesEmCartaz = expondoFilmes();
    return (
        <Container>
            <h1>selecione o filme</h1>
            <Filmes>
                {filmesEmCartaz}
            </Filmes>
        </Container>
    )
}

const Filmes = styled.div`
    display: flex;
  flex-wrap: wrap;
  justify-content: center;

`;
export default Inicio