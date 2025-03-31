import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex flex-row mt-4 gap-5">
            <Link href="/" className="p-2 hover:bg-gray-200 hover:text-gray-800 rounded-lg duration-400 hover:animate-pulse">Home</Link>
            <Link href="/about" className="p-2 hover:bg-gray-200 hover:text-gray-800 rounded-lg duration-400 hover:animate-pulse">Sobre</Link>
            <Link href="/contact" className="p-2 hover:bg-gray-200 hover:text-gray-800 rounded-lg duration-400 hover:animate-pulse">Contato</Link>
        </nav>
    )
}