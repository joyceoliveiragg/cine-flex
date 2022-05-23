import styled from "styled-components";
const Footer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 120px;
    display: flex;
    align-items: center;
    background-color: var(--cor-fundo-footer);

    img {
        width: 48px;
    height: 72px;
    padding: 8px;
    background-color :white ;
    border-radius: 8px;
    margin: 10px;
    box-shadow: opx 2px 4px 0px #0000001A;
    border: 1px solid #9EADBA;
    }
    h1{
        font-size: 26px;
    }
    
    `
export default Footer