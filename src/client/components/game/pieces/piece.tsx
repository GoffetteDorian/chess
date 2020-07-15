import * as React from "react";

interface Props {
  player: number;
  url: string;
}

const Piece = ({ player, url }: Props) => {
  return <div>{`playerl ${player}\n url: ${url}`}</div>;
};

export default Piece;
