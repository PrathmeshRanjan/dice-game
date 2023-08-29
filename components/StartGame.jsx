import styled from "styled-components";

export default function StartGame({toggle}) {
  return (
    <div>
      <Container>
        <img src="../images/dices.png" alt="" />
        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px 18px;
  background: black;
  color: white;
  border-radius: 5px;
  min-width: 220px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer ;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
