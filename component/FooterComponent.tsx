import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function FooterComponent() {
  return (
    <footer className=' bg-white' style={{ marginTop: '30px', height: '250px' }}>
      <section style={{ margin: '50px' }} className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div style={{ display: 'flex', gap: '400px', marginTop: '50px' }}>
          <div>
            <div className="text-teal-600">
              <img style={{ width: '100px' }} src="https://the-next.eliterature.org/img/global/next-icon.png" alt="logo" />
            </div>
            <p className="mt-4 max-w-xs text-gray-500">
              NEXT-ORA Shop is a popular e-commerce store that specializes in providing authentic Shoes products to
              customers all over the world.
            </p>
            <ul className=" flex gap-5">
              <li><BsFacebook size="" /></li>
              <li><AiFillInstagram /></li>
              <li><BsTelegram /></li>
              <li><AiFillTwitterCircle /></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">Category</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>Nike</li>
              <li>Adidas</li>
              <li>New Balance</li>
              <li>Converse</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">Company</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-500">&copy; 2023. NEXT-ORA Shop. All rights reserved.</p>
      </section>
    </footer>
  );
}
