import Link from "next/link";

export default function Navbar() {
  return(
    <nav className="flex justify-between item-center bg-slate-800 px-8 py-3">
      <Link href={'/'} className="text-white font-bold ">UTopik Central</Link>
      <Link href={'/add-Topic'} className="text-white p-2">Add Topik </Link>
    </nav>
  );
}