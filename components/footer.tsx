import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white p-3 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2025 Baseball Analytics. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li><Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link></li>
        </ul>
      </div>
    </footer>
  )
}

