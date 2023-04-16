import ChessPieces from "@/models/ChessPieces";
import Colors from "@/models/Colors";
import BoardNotation from "./BoardNotation";
import { useEffect } from "react";

interface TileProps {
  tileColor: Colors;
  piece: null | ChessPieces;
  pieceColor: Colors | null;
  boardNotation: string;
  tileIndex: number;
}

const Tile = ({
  tileColor,
  piece,
  pieceColor,
  boardNotation,
  tileIndex,
}: TileProps) => {
  //See https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/
  // We should do a custom hook for this
  useEffect(() => {
    const tileElement = document.getElementById(`tile-${tileIndex}`);
    if (piece) {
      tileElement?.addEventListener("dragstart", dragEvent);
    }

    tileElement?.addEventListener("drop", (e) => {
      e.preventDefault();
      const data = e.dataTransfer?.getData("text");
      console.log(`${data} to ${boardNotation}`);
    });

    tileElement?.addEventListener("dragover", preventDefault);

    tileElement?.addEventListener("dragleave", preventDefault);

    tileElement?.addEventListener("dragenter", preventDefault);

    return () => {
      tileElement?.removeEventListener("dragstart", dragEvent);
      tileElement?.removeEventListener("dragover", preventDefault);
      tileElement?.removeEventListener("dragleave", preventDefault);
      tileElement?.removeEventListener("dragenter", preventDefault);
    };
  }, [piece, tileIndex]);

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
        notation={boardNotation}
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

const dragEvent = (e: DragEvent) => {
  e.dataTransfer?.setData("text/plain", `${(e!.target as HTMLElement)!.id}`);
};

const preventDefault = (e: DragEvent) => {
  e.preventDefault();
};

export default Tile;
