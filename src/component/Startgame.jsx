import React from 'react'
import "./Startgame.css"
import styled from 'styled-components';
import Cube from "../assets/cube.png"

const Blackbutton = styled.button`
background-color: black;
color: white;
padding: 1rem 3rem;
border: 1px solid transparent;
border-radius: 5px;

&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
}
`;

function Startgame({toggle}) {
  return (
    <>
   <section className='startgame-main'>
    <div className='sg-image-text'>
        <img src={Cube} alt="" />
        <div className='sg-text-div'>
            <h1>DICE GAME</h1>
            <Blackbutton onClick={toggle}>Play Now</Blackbutton>
        </div>
    </div>
   </section>
    </>
  )
}

export default Startgame