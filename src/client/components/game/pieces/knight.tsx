import * as React from "react";

import Piece from "./piece";

const Knight = (player: number) => {
  const isMovePossible = (src: number, dest: number) => {
    return (
      src - 17 === dest ||
      src - 10 === dest ||
      src + 6 === dest ||
      src + 15 === dest ||
      src - 15 === dest ||
      src - 6 === dest ||
      src + 10 === dest ||
      src + 17 === dest
    );
  };

  const getSrcToDestPath = (src?: number, dest?: number): Array<number> => {
    return [];
  };

  return <Piece player={player} url={"knight"} />;
};

export default Knight;
