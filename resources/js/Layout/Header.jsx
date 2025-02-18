import { Link } from "@inertiajs/react";

export function Header() {
    return (
      <header className=" w-full bg-blue-950 border-b border-white/20 shadow-lg p-4 flex items-center justify-between z-50">
        <h1 className="text-xl font-extrabold text-white">      
                      <Link href="/"> HOME</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li className="hover:text-gray-300 transition duration-300">
            </li>
            <li className="hover:text-gray-300 transition duration-300">
                
            <Link href={"/posts/create"}> Create</Link>

            </li>
          </ul>
        </nav>
      </header>
    );
  }
  