import  React, {useEffect, useState}  from "react"
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Container from "./Container";
import Footer from "./Footer";
import Dia from "./Dia";
function Sessoes(){
    const {filmeId} = useParams();
    const [filme, setFilme] = useState(null);
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`;
        const promise = axios.get(URL);
        promise.then((response)=> {
            const {data} = response;
            setFilme(data);
        });
        promise.catch(err => alert(err.response.statusText));

    },[]);
    function sessoesDia() {
        if(filme !==null){
            return filme.days.map(dia => {
                const {weekday, date, showtimes, id} = dia;
                return <Dia key={id} dia={weekday} data = {date} sessoes={showtimes}/>

            });
        }
        return <p>Carregando...</p>;
    }
    function noFooter() {
        if(filme !== null) {
          const {posterURL, title} = filme;
          return (
            <>
              <img src={posterURL} alt={title} />
              <h1>{title}</h1>
            </>
          )
        }
    
        return <></>;
      }
   
  const sessoesPorDia = sessoesDia();
  const footer = noFooter();
  return (
    <Container>
      <h1>Selecione o horário</h1>
      <Dias>{sessoesPorDia}</Dias>
      <Footer>{footer}</Footer>
    </Container>
  )
      
}
export default Sessoes

const Dias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
