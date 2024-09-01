import React from 'react'
import styled from "styled-components"

function TotalCount({score}) {
  return (
    <TotalcouterContainer>
        <h1>{score}</h1>
        <p>Total Count</p>
    </TotalcouterContainer>
  )
}

export default TotalCount;

const TotalcouterContainer = styled.div`
    max-width:200px;
    // background-color: red;
    text-align: center;

     h1{
        font-size: 5rem;
    }
    p{
      font-size: 2rem;
      margin-top: 0%;
      font-weight: 500;
    }
`