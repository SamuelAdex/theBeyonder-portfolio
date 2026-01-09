"use client";

import Link from 'next/link';
import React from 'react'
import { RiLink } from 'react-icons/ri';

const Vision = () => {
  return (
    <section id='about' className='bg-black md:py-24 py-12 md:px-0 px-6'>
      <div className='md:w-[80%] flex md:flex-row flex-col mx-auto w-full'>
        <div className='flex-3'>
          <div className='text-white md:text-[25px] text-[30px] regular mt-5'>ABOUT ME</div>

        </div>
        <div className='flex-7'>
          <p className='bg-linear-to-r from-[#c1c1c1] via-[#ffffff] to-[#7b7b7b] animate-gradient md:text-[48px] text-[20px] regular mb-8 bg-clip-text text-transparent'>Blockchain-focused Software Engineer with 4+ years of experience building smart contracts, decentralized applications, and full-stack Web3 systems. Specialized in Solidity, Ethereum, and Web3 frontend engineering with React and ethers.js, delivering secure, scalable, and user-friendly decentralized products.</p>
          <Link href={"https://x.com/onchainwithAde"} target="_blank" className='text-purple-800 inline-flex items-center gap-2'>LEARN MORE</Link>
        </div>
      </div>
    </section>
  )
}

export default Vision