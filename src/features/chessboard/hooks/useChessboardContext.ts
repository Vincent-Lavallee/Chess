import React, { useContext } from "react";
import useChessboardPageState from "./useChessboardPageState";

export type ChessboardContextType = ReturnType<
  typeof useChessboardPageState
>["chessboardContextValues"];

export const ChessboardContextDefaultValue = {
  blackTimer: 600,
  setBlackTimer: () => {},
  whiteTimer: 600,
  setWhiteTimer: () => {},
  isWhiteTurn: true,
  chessboard: "",
  renderChessBoard: () => {},
} as ChessboardContextType;
export const ChessboardContext = React.createContext<ChessboardContextType>(
  ChessboardContextDefaultValue
);

export const useChessboardContext = () => {
  return useContext(ChessboardContext);
};
