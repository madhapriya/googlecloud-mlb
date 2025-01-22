"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
// import DarkModeToggle from './dark-mode-toggle'
import DarkModeToggle from "../components/dark-mode-toggle";

const Home: React.FC = () => {
  const bannerListRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const banners = bannerListRef.current!.children;

    const cycleBanners = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    };

    const interval = setInterval(cycleBanners, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bannerListRef.current) {
      bannerListRef.current.scroll({
        left: bannerListRef.current.clientWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.container}>
      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Welcome Section */}
      <section className={styles.welcome}>
        <h1>Welcome to Baseball Analytics</h1>
        <p>
          Discover advanced insights and personalized highlights for your favorite teams and players.
        </p>
        <Link href="/features" className={styles.exploreButton}>
          Explore Features
        </Link>
      </section>

      {/* Banners Section */}
      <section className={styles.banners}>
        <h2>Latest Highlights</h2>
        <div className={styles.bannerWrapper}>
          <div className={styles.bannerList} ref={bannerListRef}>
            <div className={styles.bannerItem}>
              <a
                href="https://www.mlb.com/news/mlb-free-agent-signings-seeking-rebounds-in-2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/banner1.jpg" alt="2024 Free Agents" className={styles.bannerImage} />
                <div className={styles.bannerContent}>
                  <div className={styles.textOverlay}>
                    <h3>Plenty to prove this season for these 2024 free agents</h3>
                    <p>
                      Much of the focus will be on this winter's marquee free-agent additions. But several players from last year’s free-agent class have something to prove.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className={styles.bannerItem}>
              <a
                href="https://www.mlb.com/news/popular-minor-league-hats-in-2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/banner2.jpg" alt="Popular Minor League Hats" className={styles.bannerImage} />
                <div className={styles.bannerContent}>
                  <div className={styles.textOverlay}>
                    <h3>Tip of the cap to last season's most popular Minor League hats</h3>
                    <p>
                      Explore top-selling MiLB caps, from a surfing pup to a rubber duck to a classic logo you might remember from a movie.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className={styles.bannerItem}>
              <a
                href="https://www.mlb.com/news/bob-uecker-dies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/banner3.jpg" alt="Bob Uecker" className={styles.bannerImage} />
                <div className={styles.bannerContent}>
                  <div className={styles.textOverlay}>
                    <h3>Bob Uecker passes away</h3>
                    <p>
                      Beloved broadcaster Bob Uecker, known for his iconic voice and wit, has passed away. Remembering his legendary career and impact on baseball.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.dots}>
            {Array.from({ length: 3 }).map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News/Blogs Section */}
      <section className={styles.news}>
        <h2>Latest News & Blogs</h2>
        <div className={styles.newsGrid}>
          <div className={styles.newsItem}>
            <h3>Player Spotlight: John Doe</h3>
            <p>
              John Doe has been on a hot streak this season, with an impressive batting average and several key plays that have led his team to victory.
            </p>
            <Link href="https://www.mlb.com/news/john-doe" className={styles.readMoreButton}>
              Read More
            </Link>
          </div>
          <div className={styles.newsItem}>
            <h3>Team Analysis: The Eagles</h3>
            <p>
              The Eagles have shown remarkable improvement this season, thanks to their strong defense and strategic plays.
            </p>
            <Link href="https://www.mlb.com/news/the-eagles" className={styles.readMoreButton}>
              Read More
            </Link>
          </div>
          <div className={styles.newsItem}>
            <h3>Upcoming Star: Jane Smith</h3>
            <p>
              Jane Smith is a rising star in the league, with exceptional skills that have caught the attention of scouts and fans alike.
            </p>
            <Link href="https://www.mlb.com/news/jane-smith" className={styles.readMoreButton}>
              Read More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;




// import Link from 'next/link'
// /* eslint-disable react/no-unescaped-entities */

// export default function Home() {
//   return (
//     <div className="container mx-auto px-4">
//       <section className="py-12 text-center">
//         <h1 className="text-4xl font-bold mb-4">Welcome to Baseball Analytics</h1>
//         <p className="text-xl mb-8">Discover advanced insights and personalized highlights for your favorite teams and players.&quot;</p>
//         <Link href="/features" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
//           Explore Features
//         </Link>
//       </section>

//       <section className="py-12">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
//             <h3 className="text-xl font-bold mb-2">Personalized Highlights</h3>
//             <p className="mb-4">Get custom highlights for your favorite teams and players. Stay up-to-date with personalized notifications for key moments in each game.&quot;</p>
//             <ul className="list-disc pl-5">
//               <li>Track key plays and moments.</li>
//               <li>Set preferences for your favorite teams and players.</li>
//               <li>Watch highlights at your convenience.</li>
//             </ul>
//           </div>
//           <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
//             <h3 className="text-xl font-bold mb-2">Real-Time Insights</h3>
//             <p className="mb-4">Access live game data with strategy explanations. Get the latest stats, player performance, and game trends instantly.&quot;</p>
//             <ul className="list-disc pl-5">
//               <li>Live tracking of player stats and performance.</li>
//               <li>Real-time strategy insights and analytics.</li>
//               <li>Interactive charts and visuals.</li>
//             </ul>
//           </div>
//           <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
//             <h3 className="text-xl font-bold mb-2">Statcast Analysis</h3>
//             <p className="mb-4">Extract and analyze Statcast data from game videos. Gain deeper insights into player actions and team strategies.&quot;</p>
//             <ul className="list-disc pl-5">
//               <li>Advanced player tracking and metrics.</li>
//               <li>Identify key moments with statistical analysis.</li>
//               <li>Compare player and team performance over time.</li>
//             </ul>
//           </div>
//           <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
//             <h3 className="text-xl font-bold mb-2">Prospect Predictions</h3>
//             <p className="mb-4">Get AI-powered predictions for rising baseball stars. Discover potential future stars based on historical data and trends.&quot;</p>
//             <ul className="list-disc pl-5">
//               <li>Analyze up-and-coming players using AI insights.</li>
//               <li>Predict player development and future success.</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

