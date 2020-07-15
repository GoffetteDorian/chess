import * as React from "react";

import Piece from "./piece";

const Rook = (player: number) => {
  const isMovePossible = (src: number, dest: number) => {
    let mod = src % 8;
    let diff = 8 - mod;
    return (
      Math.abs(src - dest) % 8 === 0 || (dest >= src - mod && dest < src + diff)
    );
  };

  const getSrcToDestPath = (src: number, dest: number): Array<number> => {
    let path = [],
      pathStart,
      pathEnd,
      incrementBy;

    if (src > dest) {
      pathStart = dest;
      pathEnd = src;
    } else {
      pathStart = src;
      pathEnd = dest;
    }

    if (Math.abs(src - dest) % 8 === 0) {
      incrementBy = 8;
      pathStart += 8;
    } else {
      incrementBy = 1;
      pathStart += 1;
    }

    for (let i = pathStart; i < pathEnd; i += incrementBy) {
      path.push(i);
    }
    return path;
  };

  return <Piece player={player} url={"rook"} />;
};

export default Rook;
