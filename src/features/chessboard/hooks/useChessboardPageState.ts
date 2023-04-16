import { useState } from "react";
import initialFENPosition from "./initialPosition";
import useChessboardContentHandler from "./useChessboardContentHandler";

const useChessboardPageState = () => {
  const [fenString, setfenString] = useState<string>(initialFENPosition);

  const { renderChessBoard, getWhoseTurnItIs } = useChessboardContentHandler({
    fenString,
  });

  const chessboardContextValues = {
    getWhoseTurnItIs,
    fenString,
  };

  return {
    getWhoseTurnItIs,
    fenString,
    renderChessBoard,
    chessboardContextValues,
  };
};

export default useChessboardPageState;
