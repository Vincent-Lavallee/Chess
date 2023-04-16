import Colors from "@/models/Colors";

interface BoardNotationProps {
  notation: string;
  tileColor: Colors;
  tileIndex: number;
}

const BoardNotation = ({
  notation,
  tileColor,
  tileIndex,
}: BoardNotationProps) => {
  const showNumberNotation = tileIndex % 8 === 0;
  const showLetterNotation = tileIndex + 1 - 7 * 8 > 0;

  return (
    <>
      {showLetterNotation && (
        <div
          style={{
            position: "absolute",
            padding: "2px",
            color: tileColor === Colors.WHITE ? "pink" : "white",
            textShadow: "1px 1px black",
            ...(isNaN(parseInt(notation[0])) && { bottom: 0, right: 0 }),
          }}
        >
          {notation[0]}
        </div>
      )}
      {showNumberNotation && (
        <div
          style={{
            position: "absolute",
            padding: "2px",
            color: tileColor === Colors.WHITE ? "pink" : "white",
            textShadow: "1px 1px black",
          }}
        >
          {notation[1]}
        </div>
      )}
    </>
  );
};

export default BoardNotation;
