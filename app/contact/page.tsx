// import Link from 'next/link';

// export default function Contact() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
//       <p className="text-xl mb-4">We'd love to hear from you! Here's how you can reach us:</p>
//       <ul className="list-disc pl-6 space-y-4">
//         <li>
//           <strong>Email:</strong> <a href="mailto:support@baseballanalytics.com" className="text-blue-600 hover:underline">support@baseballanalytics.com</a>
//         </li>
//         <li>
//           <strong>Phone:</strong> +1-800-555-BASE
//         </li>
//         <li>
//           <strong>Address:</strong> 123 Baseball Lane, Analytics City
//         </li>
//       </ul>
//     </div>
//   );
// }

import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle'
// import DarkModeToggle from "../components/dark-mode-toggle"

export default function Contact() {
  return (
    // <div className="bg-gray-100 min-h-screen">
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col text-gray-900 dark:text-white">

      

      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p>If you have any questions or need support, feel free to reach out to us!</p>

        <form className="mt-6">
          <label className="block mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" id="name" required />

          <label className="block mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="email" id="email" required />

          <label className="block mb-2" htmlFor="message">Message</label>
          <textarea className="w-full p-2 mb-4 border border-gray-300 rounded" id="message" rows="4" required></textarea>

          <button className="bg-blue-600 text-white p-2 rounded" type="submit">Send Message</button>
        </form>

        <h2 className="text-xl font-medium mt-6">Our Address</h2>
        <p>123 Baseball Ave., Suite 101, Tech City, XYZ 12345</p>

        <h2 className="text-xl font-medium mt-6">Follow Us</h2>
        <p>Connect with us on <Link href="https://twitter.com/YourTwitterHandle" className="text-blue-600">Twitter</Link> and <Link href="https://facebook.com/YourFacebookPage" className="text-blue-600">Facebook</Link></p>
      </main>

    
    </div>
  );
}
