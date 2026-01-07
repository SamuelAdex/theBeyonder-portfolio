"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { SiWalletconnect } from "react-icons/si";
import meImg from '@/public/img/me.jpeg';
import Image from 'next/image';

const Hero = () => {
  const router = useRouter();

  return (
    <section className='flex md:flex-row flex-col flex-wrap items-center relative h-screen gap-6 overflow-hidden justify-center md:px-0 px-6 bg-black'>
      <section className='md:space-y-7 relative z-10 md:flex-2 md:pl-[100px]'>
        <div className='bold md:text-[45px] text-[30px] bg-linear-to-r from-[#c1c1c1] via-[#ffffff] to-[#7b7b7b] bg-clip-text text-transparent animate-gradient md:leading-[50px] leading-[35px]'>Samuel Olaleye, A Cracked Web3 Developer, Entrepreneur and Community Builder.</div>
        <p className='md:w-[700px] mt-3 text-[#dddbdb] regular md:text-[18px] text-[14px]'>{"Building innovative Web3 solutions and intuitive digital experiences. Software engineer focused on smart contracts, decentralized systems, and modern full-stack development."}</p>

        <div className='flex md:items-start mt-3'>
          <button onClick={() => router.push("https://wa.me/+2349058944467")} className='md:w-[200px] w-[150px] cursor-pointer text-white bg-linear-to-t from-[#250242] to-[#62109F] p-4 md:rounded-[20px] rounded-[10px] inline-flex gap-2 items-center semibold justify-center'>Hire Me</button>
        </div>
      </section>
      <section className="md:flex-2">
        <Image src={meImg} alt="" className='w-full md:h-auto md:relative absolute left-0 top-0 h-full object-cover' />
      </section>
      <div className="absolute bottom-0 left-0 w-full md:h-[1000px] h-[500px] bg-linear-360 from-purple-950 to-transparent"></div>
    </section>
  )
}

export default Hero;