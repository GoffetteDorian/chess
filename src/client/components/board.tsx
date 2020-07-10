import * as React from "react";

import { N_ROW, N_COL } from "../core/constants";

const Board = () => {
  return (
    <>
      {Array.from(new Array(N_COL)).map((col) => (
        <div>{col}</div>
      ))}
    </>
  );
};
