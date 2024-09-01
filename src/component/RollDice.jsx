import React, { useState } from 'react'
import styled from 'styled-components'


function RollDice({currentDice, RolDice}) {

    // const[currentDice,setCurrentDice]=useState(1);

   

  return (
    <DiceContainer>
        <div className=' dice' onClick={RolDice}>
            <img src={`/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to Roll</p>
        
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 1.3rem;
    }
    .dice{
        cursor: pointer;
    }
    
`