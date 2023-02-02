import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <h1 className="text-5xl text-primary">Foodsi</h1>
        </Link>
      </div>
    </header>
  );
}
