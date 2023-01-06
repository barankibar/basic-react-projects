import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from "react-textfit";

const Display = () => {
  const { calc } = useContext(CalcContext);
  return (
    <Textfit mode="single" className="screen">
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
};

export default Display;
