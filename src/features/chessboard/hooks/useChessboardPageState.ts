import { useState } from "react";
import initialFENPosition from "./initialPosition";
import useChessboardContentHandler from "./useChessboardContentHandler";

const useChessboardPageState = () => {
  const [chessboard, setChessBoard] = useState<string>(initialFENPosition);

  const { renderChessBoard } = useChessboardContentHandler({ chessboard });

  const chessboardContextValues = {
    chessboard,
  };

  return {
    chessboard,
    renderChessBoard,
    chessboardContextValues,
  };
};

export default useChessboardPageState;
