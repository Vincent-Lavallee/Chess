import Colors from "@/models/Colors";
import { useContext, useEffect, useMemo, useState } from "react";
import { ChessboardContext } from "../chessboard/hooks/useChessboardContext";

interface TimerProps {
  color: Colors;
}

const Timer = ({ color }: TimerProps) => {
  const { getWhoseTurnItIs, fenString } = useContext(ChessboardContext);

  const [time, setTime] = useState(600);

  useEffect(() => {
    if (
      (getWhoseTurnItIs() && color === Colors.WHITE) ||
      (!getWhoseTurnItIs() && color === Colors.BLACK)
    ) {
      const interval = setInterval(() => {
        setTime((prev) => {
          if (prev === 1) clearInterval(interval);
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [color, getWhoseTurnItIs, fenString]);

  return (
    <div
      style={{
        color: "white",
        width: "600px",
        display: "flex",
        justifyContent: "flex-end",
        margin: "20px 00px",
        ...(time <= 60 && { color: "red" }),
      }}
    >
      <div>{formatTime(time)}</div>
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
