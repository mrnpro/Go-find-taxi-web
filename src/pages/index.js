import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    // Handle deep linking
    const handleDeepLink = () => {
      const { pathname, search } = window.location;
      const params = new URLSearchParams(search);

      // Example deep link handler
      if (pathname.startsWith('/ride')) {
        const rideId = params.get('id');
        const appUrl = `gofindtaxi://ride?id=${rideId}`;
        window.location.href = appUrl;
      }
    };

    handleDeepLink();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>GoFind Taxi</title>
        <meta name="description" content="GoFind Taxi - Your reliable ride companion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Welcome to GoFind Taxi
        </h1>

        <p className="description">
          Download our app to get started
        </p>

        <div className="grid">
          <a href="#" className="card">
            <h2>Download on App Store &rarr;</h2>
            <p>Get our iOS app from the Apple App Store.</p>
          </a>

          <a href="#" className="card">
            <h2>Get it on Google Play &rarr;</h2>
            <p>Download our Android app from Google Play Store.</p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #f5f5f5;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
          color: #333;
        }

        .description {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
          color: #666;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background: white;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
