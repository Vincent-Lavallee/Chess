import useChessboardPageState from "./hooks/useChessboardPageState";
import { ChessboardContext } from "./hooks/useChessboardContext";
import Timer from "../timer/Timer";
import Colors from "@/models/Colors";

interface ChessboardPageContentProps {}

const ChessboardPageContent = ({}: ChessboardPageContentProps) => {
  const { chessboardContextValues, renderChessBoard } =
    useChessboardPageState();

  return (
    <ChessboardContext.Provider value={chessboardContextValues}>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Timer color={Colors.BLACK} />
        <div
          style={{
            display: "grid",
            width: "600px",
            height: "600px",
            gridTemplateColumns: "repeat(8,1fr)",
            gridTemplateRows: "repeat(8,1fr)",
          }}
        >
          {renderChessBoard()}
        </div>
        <Timer color={Colors.WHITE} />
      </div>
    </ChessboardContext.Provider>
  );
};

export default ChessboardPageContent;
