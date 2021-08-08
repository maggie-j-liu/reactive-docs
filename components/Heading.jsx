import Head from "next/head";
import Image from "next/image";

export default function Heading() {
  return (
    <div className="mx-auto max-w-prose">
      <h1 className="text-center text-6xl font-bold bg-gradient-to-tr from-sky-400 via-blue-500 to-purple-400 bg-clip-text text-transparent w-max mx-auto">
        Reactive.
      </h1>
      <h2 className="text-center text-3xl">
        An easy to set up reactions and comments widget using your own Firebase
        database.
      </h2>
    </div>
  );
}
