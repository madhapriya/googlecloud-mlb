import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle'

export default function PrivacyPolicy() {
  return (
    // <div className="bg-gray-100 min-h-screen">
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col text-gray-900 dark:text-white">

      {/* <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Baseball Analytics</Link>
          <nav className="space-x-4">
            <Link href="/home" className="hover:text-black transition-colors">Home</Link>
            <Link href="/features" className="hover:text-black transition-colors">Features</Link>
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            <Link href="/login" className="hover:text-black transition-colors">Login</Link>
          </nav>
        </div>
      </header> */}

      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal data.</p>

        <h2 className="text-xl font-medium mt-6">Information We Collect</h2>
        <p>We collect personal data (name, email) and technical data (IP address, browser info) when you visit our site.</p>

        <h2 className="text-xl font-medium mt-6">How We Use Your Data</h2>
        <p>We use your data to improve the site and provide you with relevant content and offers.</p>

        <h2 className="text-xl font-medium mt-6">Cookies</h2>
        <p>We use cookies to enhance your experience. You can disable them in your browser settings.</p>

        <h2 className="text-xl font-medium mt-6">Data Security</h2>
        <p>Your data is protected using industry-standard security measures.</p>

        <h2 className="text-xl font-medium mt-6">Changes to This Policy</h2>
        <p>We may update this policy occasionally. Any updates will be posted on this page.</p>
      </main>

      {/* <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2025 Baseball Analytics. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
}
