import * as React from "react";

import Square from "./square";
import { N_ROW, N_COL } from "../core/constants";

const Board = () => {
  console.log("bef");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Array.from(new Array(N_COL).keys()).map((i) => (
        <div key={`row-${i}`}>
          {Array.from(new Array(N_ROW).keys()).map((j) => (
            <Square
              key={`cell-${i}-${j}`}
              shade={(j + i) % 2 ? "dark-square" : "light-square"}
              onClick={() => console.log(`cell-${i}-${j} clicked`)}
              style={{}}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
