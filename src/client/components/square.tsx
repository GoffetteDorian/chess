import * as React from "react";
import "../assets/css/square.css";

interface Props {
  shade: "dark-square" | "light-square";
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  style: Object;
}

const Square = ({ shade, onClick, style }: Props) => (
  <button className={"square " + shade} onClick={onClick} style={style} />
);

export default Square;
