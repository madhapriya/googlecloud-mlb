"use client";
import Link from 'next/link';
import { useState } from 'react';
import DarkModeToggle from './dark-mode-toggle';

export default function Header() {
  const [featuresOpen, setFeaturesOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-2 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold hover:text-blue-200 transition-colors">
          Baseball Analytics
        </Link>
        <ul className="flex space-x-4 items-center">
          <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
          <li
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <span className="hover:text-black cursor-pointer transition-colors">Features</span>
            {featuresOpen && (
              <ul className="absolute top-full left-0 bg-blue-600 text-white shadow-md rounded mt-2 w-40">
                <li className="p-2 hover:bg-blue-500 transition-colors">
                  <Link href="/features/mlb" className="hover:text-black transition-colors">Teams</Link>
                </li>
                <li className="p-2 hover:bg-blue-500 transition-colors">
                  <Link href="/features/players" className="hover:text-black transition-colors">Players</Link>
                </li>
              </ul>
            )}
          </li>
          <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
          <li><Link href="/auth/login" className="hover:text-black transition-colors">Login</Link></li>
          <li><DarkModeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}



// import Link from 'next/link'
// import DarkModeToggle from './dark-mode-toggle'

// export default function Header() {
//   return (
//     <header className="bg-blue-600 text-white p-2 shadow-md">
//       <nav className="container mx-auto flex justify-between items-center">
//         <Link href="/" className="text-2xl font-semibold hover:text-blue-200 transition-colors">
//           Baseball Analytics
//         </Link>
//         <ul className="flex space-x-4 items-center">
//           <li><Link href="/" className="hover:text-black
//           transition-colors">Home</Link></li>
//           <li><Link href="/features" className="hover:text-black
//           transition-colors">Features</Link></li>
//           <li><Link href="/about" className="hover:text-black
//           transition-colors">About</Link></li>
//           <li><Link href="/contact" className="hover:text-black
//            transition-colors">Contact</Link></li>
//           <li><Link href="/auth/login" className="hover:text-black transition-colors">Login</Link></li>
//           <li><DarkModeToggle /></li>
//         </ul>
//       </nav>
    
//     </header>
//   )
// }

