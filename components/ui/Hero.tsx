"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { SiWalletconnect } from "react-icons/si";
import meImg from '@/public/img/me.jpeg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const router = useRouter();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const imageAnim = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" as const, delay: 0.2 }
    }
  };

  return (
    <section className='flex md:flex-row flex-col flex-wrap items-center relative h-screen gap-6 overflow-hidden justify-center md:px-0 px-6 bg-black'>
      <motion.section
        className='md:space-y-7 relative z-10 md:flex-2 md:pl-[100px]'
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={item} className='bold md:text-[45px] text-[30px] bg-linear-to-r from-[#c1c1c1] via-[#ffffff] to-[#7b7b7b] bg-clip-text text-transparent animate-gradient md:leading-[50px] leading-[35px]'>Samuel Olaleye, A Cracked Web3 Developer, Entrepreneur and Community Builder.</motion.div>
        <motion.p variants={item} className='md:w-[700px] mt-3 text-[#dddbdb] regular md:text-[18px] text-[14px]'>{"Building innovative Web3 solutions and intuitive digital experiences. Software engineer focused on smart contracts, decentralized systems, and modern full-stack development."}</motion.p>

        <motion.div variants={item} className='flex md:items-start mt-3'>
          <button onClick={() => router.push("https://wa.me/+2349058944467")} className='md:w-[200px] w-[150px] cursor-pointer text-white bg-linear-to-t from-[#250242] to-[#62109F] p-4 md:rounded-[20px] rounded-[10px] inline-flex gap-2 items-center semibold justify-center'>Hire Me</button>
        </motion.div>
      </motion.section>
      <motion.section
        className="md:flex-2"
        variants={imageAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image src={meImg} alt="" className='w-full md:h-auto md:relative absolute left-0 top-0 h-full object-cover' />
      </motion.section>
      <div className="absolute bottom-0 left-0 w-full md:h-[1000px] h-[500px] bg-linear-360 from-purple-950 to-transparent"></div>
    </section>
  )
}

export default Hero;