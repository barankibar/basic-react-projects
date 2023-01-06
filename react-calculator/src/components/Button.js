import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName = (btn) => {
  const buttons = {
    "=": "eql",
    "/": "opt",
    "+": "opt",
    x: "opt",
    "%": "opt",
    C: "opt",
    AC: "opt",
  };
  if (buttons[btn] != undefined) return buttons[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  const handleButton = () => {
    const numberString = value.toString();

    let numberValue;

    numberString === "0" && calc.num === 0
      ? (numberValue = "0")
      : (numberValue = Number(calc.num + numberString));

    setCalc({
      ...calc,
      num: numberValue,
    });
  };
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };

        return result[sign](a, b);
      };

      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const persenClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
    });
  };

  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalClick,
      "%": persenClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleButton();
    }
  };
  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} buttons`}
    >
      {value}
    </button>
  );
};

export default Button;