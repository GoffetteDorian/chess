import * as React from "react";
import Piece from "./piece";

const Pawn = (player: number) => {
  const initialPositions = {
    1: [48, 49, 50, 51, 52, 53, 54, 55],
    2: [8, 9, 10, 11, 12, 13, 14, 15],
  };

  const isMovePossible = (
    src: number,
    dest: number,
    isDestEnemyOccupied: boolean
  ) => {
    if (player === 1) {
      if (
        (dest === src - 8 && !isDestEnemyOccupied) ||
        (dest === src - 16 && initialPositions[1].indexOf(src) !== -1)
      ) {
        return true;
      } else if (
        isDestEnemyOccupied &&
        (dest === src - 9 || dest === src - 7)
      ) {
        return true;
      }
    } else if (player === 2) {
      if (
        (dest === src + 8 && !isDestEnemyOccupied) ||
        (dest === src + 16 && initialPositions[2].indexOf(src) !== -1)
      ) {
        return true;
      } else if (
        isDestEnemyOccupied &&
        (dest === src + 9 || dest === src + 7)
      ) {
        return true;
      }
    }
    return false;
  };

  /*
   * return array of one if pawn moves two steps, else return empty array
   * @param src: number
   * @param dest: number
   * @return Array<number>
   */
  const getSrcToDestPath = (src: number, dest: number): Array<number> => {
    if (dest === src - 16) {
      return [src - 8];
    } else if (dest === src + 16) {
      return [src + 8];
    }
    return [];
  };

  return <Piece player={player} url={"pawn"} />;
};

export default Pawn;
