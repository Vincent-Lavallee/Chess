import Head from "next/head";
import ChessboardPageContent from "@/features/chessboard/ChessboardPageContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chess</title>
        <meta name="description" content="Chess board" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: "100vh" }}>
        <ChessboardPageContent />
      </main>
    </>
  );
}
