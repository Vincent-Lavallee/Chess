import React, { useContext } from "react";
import useChessboardPageState from "./useChessboardPageState";
import Colors from "@/models/Colors";

export type ChessboardContextType = ReturnType<
  typeof useChessboardPageState
>["chessboardContextValues"];

export const ChessboardContextDefaultValue = {
  renderChessBoard: () => {},
  fenString: "",
  getWhoseTurnItIs: () => Colors.WHITE,
} as ChessboardContextType;
export const ChessboardContext = React.createContext<ChessboardContextType>(
  ChessboardContextDefaultValue
);

export const useChessboardContext = () => {
  return useContext(ChessboardContext);
};
