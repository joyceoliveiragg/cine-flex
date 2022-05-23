import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
//colocar o props e dps questionar com o marcio o pq da props
function Filme(props){
 const {id, poster}=props
 return (
     <Link to={`/sessoes/${id}`}>
         
         <Poster>
             <img src={poster} alt="filme"/>
         </Poster>
     </Link>
 )

}
 const Poster = styled.div`
 padding:8px;
 background-color:white;
 border-radius:3px;
 margin:10px 15px;
 cursor: pointer;
 
 img{
    height:190px;
    width: 130px;}`


export default Filme
