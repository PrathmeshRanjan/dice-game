import styled from 'styled-components'

const RollDice = ({currentDice, roleDice}) => {
  return (
    <DiceContainer>
        <div className='dice'>
            <img onClick={roleDice} src={`/images/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    p {
        font-size: 24px;
    }

    .dice {
        cursor: pointer;
    }
`