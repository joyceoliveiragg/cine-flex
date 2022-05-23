import styled from "styled-components";
import  React,{useEffect, useState}  from "react"

function Base(){
    return (
        <Titulo>
      <h1>Cineflex</h1>
    </Titulo>
    )
}

const Titulo = styled.div`
background-color: var(--cor-fundo-header);
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center; 
  
  h1 {
      font-size: 34px;
      text-transform: uppercase;
      color: var(--cor-laraja);
  }
  `
  export default Base;