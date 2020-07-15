import * as React from "react";

import Piece from "./piece";

const Bishop = (player: number) => {
  const isMovePossible = (src: number, dest: number) => {
    return Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0;
  };

  /*
   * Get path between src and dest (src and dest exclusive)
   * @param src: number
   * @param dest: number
   * @return Array<number>
   */
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
    if (Math.abs(src - dest) % 9 === 0) {
      incrementBy = 9;
      pathStart += 9;
    } else {
      incrementBy = 7;
      pathStart += 7;
    }

    for (let i = pathStart; i < pathEnd; i += incrementBy) {
      path.push(i);
    }
    return path;
  };

  return <Piece player={player} url={"bishop"} />;
};

export default Bishop;
