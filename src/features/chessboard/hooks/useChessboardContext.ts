import React, { useContext } from "react";

export interface ChessboardContextType {}

export const ChessboardContextDefaultValue: ChessboardContextType = {};
export const ChessboardContext = React.createContext<ChessboardContextType>(
  ChessboardContextDefaultValue
);

export const useChessboardContext = () => {
  return useContext(ChessboardContext);
};
