import React, { useState } from 'react'
import styled from 'styled-components'

function NumberSelector({error,isSelected,setISelected}) {
   //  const[isSelected,setISelected]=useState();
    console.log(isSelected)

    const numberArray =[1,2,3,4,5,6]

  return (
   <>
    <SelectnumContainer>
      <p className='error-text'>{error}</p>
    <NumSelectorMaindiv>
    { numberArray.map((value,i)=>{
       return <Box key={i}
       selectedValue = {value === isSelected}
       onClick={()=>setISelected(value)}
       >{value}</Box>
    })}
    </NumSelectorMaindiv>
    <p>Select Number</p>
    </SelectnumContainer>
   
   </>
  )
}

export default NumberSelector

const Box = styled.div`
background-color:transparent;
border: 1px solid black;
width: 4rem;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
font-weight: 500;
background-color: ${(props)=>(props.selectedValue ? "black" : "white")};
color: ${(props)=>(!props.selectedValue ? "black" : "white")}
`;


const NumSelectorMaindiv = styled.div`
display: flex; 
/* justify-content:space-between; */
gap: 1rem;

`
const SelectnumContainer = styled.div`
display: flex;
flex-direction: column;
/* justify-content: end; */
align-items: end;
width: 70%;
 p{
    font-size: 1.5rem;
 }
 .error-text{
   color: red;
 }
`