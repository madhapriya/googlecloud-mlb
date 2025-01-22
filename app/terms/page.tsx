import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle'

export default function TermsOfService() {
  return (
    // <div className="bg-gray-100 min-h-screen">
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col text-gray-900 dark:text-white">


      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>
        <p>By using our website, you agree to these Terms of Service.</p>

        <h2 className="text-xl font-medium mt-6">Use of Service</h2>
        <p>You agree to use our service for lawful purposes and will not engage in activities that violate our policies.</p>

        <h2 className="text-xl font-medium mt-6">Account Registration</h2>
        <p>If applicable, you may need to register an account. Keep your credentials secure.</p>

        <h2 className="text-xl font-medium mt-6">Limitation of Liability</h2>
        <p>We are not liable for any damages arising from using our site.</p>

        <h2 className="text-xl font-medium mt-6">Modifications</h2>
        <p>We reserve the right to modify these terms at any time. Check back periodically for updates.</p>

        <h2 className="text-xl font-medium mt-6">Governing Law</h2>
        <p>These terms will be governed by the laws of your jurisdiction.</p>
      </main>

      
    </div>
  );
}
