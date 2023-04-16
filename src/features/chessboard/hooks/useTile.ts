import ChessPieces from "@/models/ChessPieces";
import { useEffect, useState } from "react";

interface useTileProps {
  tileIndex: number;
  piece: null | ChessPieces;
  tileNotation: string;
}
//See https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/

const useTile = ({ piece, tileIndex, tileNotation }: useTileProps) => {
  const dragEvent = (e: DragEvent) => {
    e.dataTransfer?.setData("text/plain", `${(e!.target as HTMLElement)!.id}`);
    setTimeout(() => {
      (e!.target as HTMLElement).style.display = "none";
    }, 0);
  };

  useEffect(() => {
    const tileElement = document.getElementById(`tile-${tileIndex}`);
    if (piece) {
      tileElement?.addEventListener("dragstart", dragEvent);
    }

    tileElement?.addEventListener("drop", (e) => {
      e.preventDefault();
      const data = e.dataTransfer?.getData("text");
      console.log(`${data} to ${tileNotation}`);
    });

    tileElement?.addEventListener("dragover", preventDefault);

    tileElement?.addEventListener("dragleave", preventDefault);

    tileElement?.addEventListener("dragenter", preventDefault);

    return () => {
      tileElement?.removeEventListener("dragstart", dragEvent);
      tileElement?.removeEventListener("dragover", preventDefault);
      tileElement?.removeEventListener("dragleave", preventDefault);
      tileElement?.removeEventListener("dragenter", preventDefault);
    };
  }, [piece, tileIndex, tileNotation]);
};

const preventDefault = (e: DragEvent) => {
  e.preventDefault();
};

export default useTile;
