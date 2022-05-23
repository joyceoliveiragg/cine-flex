import  React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Assentos from "./Assentos";
import Sessoes from "./Sessoes";
import Sucesso from "./Sucesso";
import Base from "./Base";

function App(){
  return (
    <BrowserRouter>
      <Base/>
    <Routes>
      <Route path="/" element = {<Inicio/>}/>
      <Route path="/sessoes/:filmeId" element = {<Sessoes/>}/>
      <Route path="/assentos/:sessaoId" element = {<Assentos/>}/>
      <Route path="/sucesso" element = {<Sucesso/>}/>
    </Routes>
    </BrowserRouter>
  )
}
/*
 
      */
export default App;