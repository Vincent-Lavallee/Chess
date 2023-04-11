import Colors from "@/models/Colors";

interface TileProps {
  color: Colors;
}

const Tile = ({ color }: TileProps) => {
  return (
    <div
      style={{
        backgroundColor: color === Colors.WHITE ? "white" : "black",
        height: 50,
        width: 50,
      }}
    ></div>
  );
};

export default Tile;
