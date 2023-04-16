/**
 * See https://www.chess.com/terms/fen-chess
 */

/**
 * each letter represents a piece
 * each number represents an empty square
 * each slash represents a new rank
 * capital letters represent white pieces
 * lowercase letters represent black pieces
 * thw w at the end represents the side to move
 * the KQkq at the end represents the castling rights (KQ = white can castle kingside and queenside, kq = black can castle kingside and queenside) if no castling rights, this is replaced by a dash
 * the - at the end represents the en passant target square
 * the 0 at the end represents the halfmove clock (50 moves without a pawn move or capture = draw)
 * the 1 at the end represents the fullmove number (the number of the full move. It starts at 1, and is incremented after Black's move)
 */
const initialFENPosition =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

export default initialFENPosition;
