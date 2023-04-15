import { useState } from "react";
import Tile from "./Tile";
import Colors from "@/models/Colors";
import useChessboardPageState from "./hooks/useChessboardPageState";
import { ChessboardContext } from "./hooks/useChessboardContext";

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
        }}
      >
        <div
          style={{
            display: "grid",
            width: "400px",
            height: "400px",
            gridTemplateColumns: "repeat(8,1fr)",
            gridTemplateRows: "repeat(8,1fr)",
          }}
        >
          {renderChessBoard()}
        </div>
      </div>
    </ChessboardContext.Provider>
  );
};

export default ChessboardPageContent;
