import Link from "next/link";

export default function Heading() {
  return (
    <div className="mx-auto max-w-prose">
      <h1 className="hover:italic text-center text-6xl font-bold bg-gradient-to-tr from-sky-400 via-blue-500 to-purple-400 bg-clip-text text-transparent w-max mx-auto">
        <Link href="https://github.com/maggie-j-liu/reactive">
          <a>🔥 Reactive.</a>
        </Link>
      </h1>
      <h2 className="text-center text-3xl">
        An easy to set up reactions and comments widget using your own Firebase
        database.
      </h2>
    </div>
  );
}
