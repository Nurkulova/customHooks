import React from 'react';
import styled from 'styled-components';
import useCounter from './hooks/useCounter';
import useInput from './hooks/useInput';
import useTimer from './hooks/useTimer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  && h1, h2{
    color:blueviolet;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0.5rem;
  border-radius:40px;
  border:none;
  color:yellow;
  background-color:lightskyblue;

`;

const Input = styled.input`
  padding: 10px;
  width:10vw;
  margin-bottom:40px;
  border: 2px solid ${(props) => (props.error ? 'red' : 'lightskyblue')};
`;

function App() {
  const counter = useCounter();
  const input = useInput('', (value) => value.length >= 5);
  const timer = useTimer(60);

  return (
    <Container>
      <h1>Counter: {counter.count}</h1>
      <Button onClick={counter.increment}>Increment</Button>
      <Button onClick={counter.decrement}>Decrement</Button>
      <Button onClick={counter.reset}>Reset</Button>

      <Input
        type="text"
        value={input.value}
        onChange={input.onChange}
        error={input.error}
      />
      {input.error && <p>{input.error}</p>}

      <h2>Timer: {timer.time} seconds</h2>
      <Button onClick={timer.start}>Start</Button>
      <Button onClick={timer.stop}>Stop</Button>
      <Button onClick={timer.restart}>Restart</Button>
    </Container>
  );
}

export default App;
