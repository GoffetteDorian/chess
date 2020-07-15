import * as React from "react";
import Piece from "./piece";

const King = (player: number) => {
  const isMovePossible = (src: number, dest: number) => {
    return (
      src - 9 === dest ||
      src - 8 === dest ||
      src - 7 === dest ||
      src + 1 === dest ||
      src + 9 === dest ||
      src + 8 === dest ||
      src + 7 === dest ||
      src - 1 === dest
    );
  };

  /*
   * Always return empty array because of one step
   * @return {[]}
   */
  const getSrcToDestPath = (src?: number, dest?: number): Array<number> => {
    return [];
  };

  return <Piece player={player} url={"king"} />;
};

export default King;
