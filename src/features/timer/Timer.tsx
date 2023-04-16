import Colors from "@/models/Colors";
import { useContext, useEffect, useMemo } from "react";
import { ChessboardContext } from "../chessboard/hooks/useChessboardContext";

interface TimerProps {
  color: Colors;
}

const Timer = ({ color }: TimerProps) => {
  const { isWhiteTurn, setBlackTimer, setWhiteTimer, whiteTimer, blackTimer } =
    useContext(ChessboardContext);

  useEffect(() => {
    if (
      (isWhiteTurn && color === Colors.WHITE) ||
      (!isWhiteTurn && color === Colors.BLACK)
    ) {
      const interval = setInterval(() => {
        if (color === Colors.WHITE) {
          setWhiteTimer((prev) => {
            if (prev === 1) clearInterval(interval);
            return prev - 1;
          });
        } else {
          setBlackTimer((prev) => {
            if (prev === 1) clearInterval(interval);
            return prev - 1;
          });
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [color, isWhiteTurn, setBlackTimer, setWhiteTimer]);

  const timeToShow = color === Colors.WHITE ? whiteTimer : blackTimer;

  return (
    <div
      style={{
        color: "white",
        width: "600px",
        display: "flex",
        justifyContent: "flex-end",
        margin: "20px 00px",
        ...(timeToShow <= 60 && { color: "red" }),
      }}
    >
      <div>{formatTime(timeToShow)}</div>
    </div>
  );
};

const formatTime = (time: number) => {
  return `${((time - (time % 60)) / 60).toString().padStart(2, "0")}:${(
    time % 60
  )
    .toString()
    .padStart(2, "0")}`;
};

export default Timer;
