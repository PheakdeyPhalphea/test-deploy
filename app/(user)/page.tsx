'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProductCardComponent from '@/component/ProductCardComponent';
import HeroComponent from '@/component/HeroComponent';
import { BASE_URL } from '@/lib/constants';



export default function Home() {
  const [getData, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${BASE_URL}/api/products/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main className=' w-full '>
      <HeroComponent />
      <section className=' my-10'>
        <h1 style={{fontSize: '30px'}} className=' mx-10 font-bold'>Pupular Products</h1>
        <section className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center mx-10  my-5 '>

          {getData.map((product: any, index) => (
            <ProductCardComponent
              key={index}
              name={product.name}
              image={product.image}
              price={product.price}
              onClick={() => router.push(`/${product.id}`)}
            />
          ))}
        </section>
      </section>



    </main>
  );
}