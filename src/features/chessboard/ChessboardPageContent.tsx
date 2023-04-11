import { useState } from "react";
import Tile from "./Tile";
import Colors from "@/models/Colors";

interface ChessboardPageContentProps {}

const ChessboardPageContent = ({}: ChessboardPageContentProps) => {
  const [chessBoard, setChessBoard] = useState<
    Array<Array<JSX.Element | null>>
  >([
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ]);

  return (
    <div
      style={{
        display: "grid",
        width: "450px",
        height: "450px",
        gridTemplateColumns: "repeat(9,1fr)",
        gridTemplateRows: "repeat(9,1fr)",
      }}
    >
      {chessBoard.reduce((acc, row, rowIndex) => {
        acc.push(
          ...row.map((column, columnIndex) => (
            <Tile
              color={columnIndex % 2 === 0 ? Colors.WHITE : Colors.BLACK}
              key={`${rowIndex}-${columnIndex}`}
            />
          ))
        );

        return [...acc];
      })}
    </div>
  );
};

export default ChessboardPageContent;
