import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle'

export default function About() {
  return (
    // <div className="bg-gray-100 min-h-screen">
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col text-gray-900 dark:text-white">


      {/* Main Content */}
      <main className="flex-grow p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to <strong>Baseball Analytics</strong>—a project created for the Google Cloud MLB Hackathon. Our team is dedicated to leveraging the power of Google Cloud technologies and advanced machine learning techniques to revolutionize the way baseball teams, players, and fans experience the game.
        </p>

        <h2 className="text-xl font-medium mt-6">Our Goal</h2>
        <p className="text-lg mb-4">
          The goal of our project is to create an innovative and data-driven platform that empowers fans, coaches, and teams with actionable insights. By utilizing machine learning algorithms, real-time data analysis, and personalized player metrics, we aim to improve decision-making, enhance player performance, and provide deeper insights into the game of baseball.
        </p>

        {/* <h2 className="text-xl font-medium mt-6">Why Google Cloud?</h2>
        <p className="text-lg mb-4">
          Google Cloud’s powerful suite of tools provides the perfect foundation for our project. With the ability to handle large datasets, run advanced machine learning models, and deliver results in real time, Google Cloud enables us to deliver a seamless and robust solution that can scale with the evolving needs of the baseball industry.
        </p>
        <p className="text-lg mb-4">
          Our platform is powered by Google Cloud's AI and ML services, which allow us to process game footage, player statistics, and live events to provide insights that were once unimaginable. By integrating Google Cloud’s advanced analytics tools, we can offer predictive analytics and personalized insights that enhance both player development and fan engagement.
        </p> */}

        <h2 className="text-xl font-medium mt-6">Our Team</h2>
        <p className="text-lg mb-4">
          Our team is made up of passionate engineers, data scientists, and baseball enthusiasts who came together to participate in the Google Cloud MLB Hackathon. Each member brings a unique skill set to the table, including machine learning expertise, data engineering, and a deep understanding of the game of baseball.
        </p>
        <p className="text-lg mb-4">
          We are united by a shared vision: to create innovative solutions that not only enhance the game but also make baseball analytics more accessible to fans and professionals alike. Our team is dedicated to pushing the boundaries of what's possible by combining the world of sports with cutting-edge technology.
        </p>

        <h2 className="text-xl font-medium mt-6">Our Vision</h2>
        <p className="text-lg mb-4">
          We believe that technology can transform baseball into a more dynamic and interactive sport for fans and teams alike. Our vision is to harness the power of data and machine learning to provide deeper insights, improve player performance, and create more engaging experiences for fans. With Google Cloud, we aim to set a new standard for how data is used in sports analytics.
        </p>

        <h2 className="text-xl font-medium mt-6">What to Expect</h2>
        <p className="text-lg mb-4">
          Through our website and the tools we are developing for the Google Cloud MLB Hackathon, you can expect to find a range of features including personalized player statistics, predictive analysis, and detailed game insights. Our goal is to make the power of data accessible to everyone, from casual fans to professional coaches.
        </p>

        <p className="text-lg mb-4">
          As part of our hackathon project, we are working hard to bring this vision to life using Google Cloud’s machine learning and data analytics capabilities. Stay tuned for more updates as we continue to enhance and refine our platform.
        </p>
      </main>

      {/* Main Content
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p>
          At Baseball Analytics, we provide cutting-edge analytics to improve the performance of baseball teams and players using advanced machine learning techniques.
        </p>

        <h2 className="text-xl font-medium mt-6">Our Mission</h2>
        <p>
          Our mission is to revolutionize the game of baseball with data-driven insights and analytics.
        </p>

        <h2 className="text-xl font-medium mt-6">Our Team</h2>
        <p>
          Our team consists of passionate engineers and data scientists working together to bring innovative solutions to the sport.
        </p>
      </main> */}

    </div>
  );
}


