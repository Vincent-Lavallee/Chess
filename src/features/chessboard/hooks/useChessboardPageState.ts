import { useState } from "react";
import initialFENPosition from "./initialPosition";
import useChessboardContentHandler from "./useChessboardContentHandler";

const useChessboardPageState = () => {
  const [chessboard, setChessBoard] = useState<string>(initialFENPosition);
  const [isWhiteTurn, setIsWhiteTurn] = useState<boolean>(true);
  const [whiteTimer, setWhiteTimer] = useState<number>(600);
  const [blackTimer, setBlackTimer] = useState<number>(600);

  const { renderChessBoard } = useChessboardContentHandler({ chessboard });

  const chessboardContextValues = {
    chessboard,
    isWhiteTurn,
    blackTimer,
    setBlackTimer,
    whiteTimer,
    setWhiteTimer,
  };

  return {
    blackTimer,
    setBlackTimer,
    whiteTimer,
    setWhiteTimer,
    isWhiteTurn,
    chessboard,
    renderChessBoard,
    chessboardContextValues,
  };
};

export default useChessboardPageState;
