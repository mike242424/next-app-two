'use client';

import Link from 'next/link';
import ProductCard from './components/ProductCard/ProductCard';
import { getServerSession } from 'next-auth';
import coffee from '../public/images/coffee.jpg';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// lazy loading
// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  // const session = await getServerSession(authOptions);
  return (
    <main className="relative">
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <h1>Hello</h1>
      {/* lazy loading lodash */}
      <button
        className="btn"
        onClick={async () => {
          const _ = (await import('lodash')).default;
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];
          const sortedArray = _.orderBy(users, ['name']);
          console.log(sortedArray);
        }}
      >
        Show
      </button>
      {/* <button className="btn" onClick={() => setIsVisible(!isVisible)}>
        Show
      </button> */}
      {/* {isVisible && <HeavyComponent />} */}
      <br />
      <Link href="/users">Users</Link>
      {/* <Image src={coffee} alt="coffee" /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt=""
        fill
        className="object-cover"
        quality={100}
        priority
      /> */}
      <ProductCard />
    </main>
  );
}
