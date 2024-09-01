import React, { useState } from 'react'
import TotalCount from './TotalCount'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import ShowRules from './ShowRules'

function PlayGame() {
  const[ruleHide,setRuleHide]=useState(false)
  const [error,setError]=useState('');
  const [score,setScore]=useState(0);
  const[isSelected,setISelected]=useState();
  const[currentDice,setCurrentDice]=useState(1);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};

const RolDice = ()=>{
  if (!isSelected) {
    setError("you have not select any number")
    return
  }
  setError('');
    const randomNumber = generateRandomNumber(1,6);
    setCurrentDice(randomNumber);

    

    if (isSelected===randomNumber) {
      setScore((prev)=> prev+randomNumber)
    } else {
      setScore((prev)=> prev-2)
    }

    setISelected(undefined)
} 

const ResetScore =()=>{
  setScore(0);
}

  return (
      <MainContainer>
        <div className='top-section' style={{display:'flex',justifyContent:'space-between'}}>
        <TotalCount score={score}
        />
        <NumberSelector
        isSelected={isSelected}
        setISelected={setISelected}
        error={error}
        />
        </div>
        <RollDice 
        currentDice={currentDice}
        RolDice={RolDice} />
        <button className='reset-btn' onClick={ResetScore}>Reset Score</button>
        <button className='rule-btn' 
        onClick={()=>setRuleHide(prev=>!prev)}
        >{ruleHide ? "hide" : "show"} Roles</button>
        {ruleHide && <ShowRules/>}
    </MainContainer>
  )
}

export default PlayGame

const MainContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  .top-section{
    display: flex;
    justify-content: space-between;
  }
  .reset-btn{
        background-color: white;
        color: black;
        font-size: 1.2rem;
        width: 12rem;
        height: 2rem;
        margin-top: 2rem;
        align-self: center;
        &:hover{
            background-color: black;
            color: white;
        }
    }
    .rule-btn{
        background-color: black;
        color: white;
        font-size:1.2rem;
        height: 2rem;
        width: 12rem;
        margin-top: 1rem;
        /* justify-self: center; */
        align-self: center;
        &:hover{
            background-color: white;
            color: black;
        }
    }
`