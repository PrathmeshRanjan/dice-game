import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from 'styled-components'
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState()
  const [showRules, setShowRules] = useState(false);

  const RoleDice = () => {
    if (!selectedNumber) {
      setError('You have not selected any number')
      return
    }
    setError('')

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber)

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - randomNumber)
    }

    setSelectedNumber(undefined)
  }

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDice currentDice={currentDice} roleDice={RoleDice}/>

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`