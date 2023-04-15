import ChessPieces from "@/models/ChessPieces";
import Colors from "@/models/Colors";

interface TileProps {
  tileColor: Colors;
  piece: null | ChessPieces;
  pieceColor: Colors | null;
}

const Tile = ({ tileColor, piece, pieceColor }: TileProps) => {
  return (
    <div
      style={{
        backgroundColor: tileColor === Colors.WHITE ? "white" : "pink",
        height: 50,
        width: 50,
        color: "red",
        ...(piece && {
          cursor: "grab",
        }),
      }}
    >
      {piece && (
        <div
          style={{
            height: 50,
            width: 50,
            background: `url(./pieces/${pieceColor}_${piece}.svg) center / cover`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Tile;
