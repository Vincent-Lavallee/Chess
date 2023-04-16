import ChessPieces from "@/models/ChessPieces";
import Colors from "@/models/Colors";
import BoardNotation from "./BoardNotation";
import { useEffect } from "react";
import useTile from "./hooks/useTile";

interface TileProps {
  tileColor: Colors;
  piece: null | ChessPieces;
  pieceColor: Colors | null;
  tileNotation: string;
  tileIndex: number;
}

const Tile = ({
  tileColor,
  piece,
  pieceColor,
  tileNotation,
  tileIndex,
}: TileProps) => {
  useTile({ piece, tileIndex, tileNotation });

  return (
    <div
      style={{
        backgroundColor: tileColor === Colors.WHITE ? "white" : "pink",
        height: 75,
        width: 75,
        color: "red",
        ...(piece && {
          cursor: "grab",
        }),
        position: "relative",
      }}
      id={`tile-${tileIndex}`}
    >
      <BoardNotation
        notation={tileNotation}
        tileColor={tileColor}
        tileIndex={tileIndex}
      />

      {piece && (
        <div
          id={`${pieceColor}-${piece}-${tileIndex}`}
          draggable={!!piece}
          style={{
            height: 75,
            width: 75,
            background: `url(./pieces/${pieceColor}_${piece}.svg) center / cover`,
          }}
        />
      )}
    </div>
  );
};

export default Tile;
