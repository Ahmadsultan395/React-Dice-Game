import React from 'react'
import styled from 'styled-components'

function ShowRules() {
  return (
    <ShowRoleContainer>
        <h1>How to play DIce game?</h1>
        <p>choose any number</p>
        <p>click on the Dice</p>
        <p>if selected number and Dice number are same the you will get the same score as selected number</p>
        <p>if wrong then 2 score deduct</p>

    </ShowRoleContainer>
  )
}

export default ShowRules

const ShowRoleContainer = styled.div`
background-color: lightyellow;
width: 800px;
padding:1rem;
box-shadow: 1px 2px 5px lightgray;
margin: 0 auto;
margin-top: 2rem;
`