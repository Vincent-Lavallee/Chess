import ChessPieces from "@/models/ChessPieces";
import Tile from "../Tile";
import Colors from "@/models/Colors";

interface ChessboardPageContentHandlersHookParams {
  chessboard: string;
}
function useChessboardHandlers({
  chessboard,
}: ChessboardPageContentHandlersHookParams) {
  const renderChessBoard = () => {
    return chessboard
      .split("/")
      .reduce((acc, row) => {
        row.split("").map((tileContent) => {
          if (!isNaN(Number(tileContent))) {
            for (let i = 0; i < Number(tileContent); i++) {
              acc.push(null);
            }
          } else {
            acc.push(tileContent);
          }
        });
        return acc;
      }, [] as Array<string | null>)
      .map((tileContent, index) => {
        return (
          // Key shouldn't be index and Tile should be comming from the argument of the function. It'll make it easier to handle theme etc ...
          <Tile
            content={tileContent as ChessPieces}
            color={
              (index + 1 * ((index - (index % 8)) / 8)) % 2 === 0
                ? Colors.WHITE
                : Colors.BLACK
            }
            key={index}
          />
        );
      });
  };

  return {
    renderChessBoard,
  };
}

export default useChessboardHandlers;
