import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ShareLocation() {
  const router = useRouter();
  const { lat, lng } = router.query;

  return (
    <div className="container">
      <Head>
        <title>Share Location - GoFind Taxi</title>
        <meta name="description" content="Sharing location via GoFind Taxi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">
          Shared Location
        </h1>
        <div className="mb-4">
          <p>Latitude: {lat}</p>
          <p>Longitude: {lng}</p>
        </div>
      </main>
    </div>
  );
}
