import React from 'react';
import Image from 'next/image'; // Importing the Image component from Next.js

export default function Page() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-4">
          <div className="grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-teal-600">Shop with</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">NEXT-ORA Shop</p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify indent-12">NEXT-ORA Shop is a popular e-commerce store that specializes in providing authentic Shoes products to customers all over the world. The online store offers a wide range of shoes. Customers can browse through an extensive selection of high-quality items sourced from Japan and purchase them with ease via NEXT-ORA Shop&apos;s user-friendly website. The store prides itself on providing exceptional customer service, quick delivery times, and competitive pricing.</p>
              </div>
            </div>
            {/* Using the Image component */}
            <Image
              src="https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2003&q=80"
              loading="lazy"
              alt="Product screenshot"
              className="w-[48rem] rounded-lg mt-8"
              data-aos="fade-up"
              width={2003} 
              height={1335} 
            />
          </div>
        </div>
      </section>
    </main>
  );
}
