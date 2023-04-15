import ChessPieces from "@/models/ChessPieces";
import Colors from "@/models/Colors";

interface TileProps {
  color: Colors;
  // Wrong typing should be an enum
  content: null | ChessPieces;
}

const Tile = ({ color, content }: TileProps) => {
  return (
    <div
      style={{
        backgroundColor: color === Colors.WHITE ? "white" : "black",
        height: 50,
        width: 50,
        color: "red",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      {content}
    </div>
  );
};

export default Tile;
