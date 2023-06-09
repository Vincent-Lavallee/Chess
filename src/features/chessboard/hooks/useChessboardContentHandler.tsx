import ChessPieces from "@/models/ChessPieces";
import Tile from "../Tile";
import Colors from "@/models/Colors";

interface ChessboardPageContentHandlersHookParams {
  fenString: string;
}
const useChessboardHandlers = ({
  fenString,
}: ChessboardPageContentHandlersHookParams) => {
  /**
   * @private
   */
  const getTileNotation = (index: number) => {
    const letterNotation = String.fromCharCode(97 + (index % 8));
    const numberNotation = (8 - (index - (index % 8)) / 8).toString();

    const notation = `${letterNotation}${numberNotation}`;

    return notation;
  };

  const getWhoseTurnItIs = () => {
    const whoseTurnItIs = fenString.split(" ")[1];

    return whoseTurnItIs === "w" ? Colors.WHITE : Colors.BLACK;
  };

  const renderChessBoard = () => {
    return fenString
      .replaceAll("/", "")
      .split(" ")[0]
      .split("")
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
            tileIndex={index}
            tileNotation={getTileNotation(index)}
            piece={tileContent?.toLowerCase() as ChessPieces}
            pieceColor={
              tileContent
                ? tileContent === tileContent?.toLowerCase()
                  ? Colors.BLACK
                  : Colors.WHITE
                : null
            }
            tileColor={
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
    getWhoseTurnItIs,
    renderChessBoard,
  };
};

export default useChessboardHandlers;
