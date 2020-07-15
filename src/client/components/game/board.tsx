import * as React from "react";
import { useState } from "react";
import Square from "./square";
import { N_ROW, N_COL } from "../../core/constants";
import { initialiseChessBoard } from "./pieces/initialise";

const Board = () => {
  const board: Array<object> = useState([]);
  console.log(initialiseChessBoard());

  const renderSquare = (
    i: number,
    squareShade: "dark-square" | "light-square"
  ) => {
    return (
      <Square
        shade={squareShade}
        onClick={() => console.log(`square ${i} clicked`)}
        style={{}}
      />
    );
  };

  const render = () => {
    for (let i = 0; i < 8; i++) {
      const squareRows = [];
      for (let j = 0; j < 8; j++) {
        const squareShade =
          (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
            ? "light-square"
            : "dark-square";
        squareRows.push(renderSquare(i * 8 + j, squareShade));
      }
      board.push(<div className="board-row">{squareRows}</div>);
      return <div>{board}</div>;
    }
  };
};

const isEven = (num: number) => num % 2 == 0;

export default Board;
