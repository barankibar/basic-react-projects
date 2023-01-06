import react from "react";

import Wrapper from "./components/Wrapper";
import Display from "./components/Display";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import "./App.css";
import CalcProvider from "./context/CalcContext";

const buttonsV = [
  ["C", "AC", "%", "/"],
  ["7", "8", "9", "-"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "x"],
  ["0", ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Display />
        <ButtonBox>
          {buttonsV.flat().map((btn, i) => {
            return <Button value={btn} key={i}></Button>;
          })}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
