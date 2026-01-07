"use client";

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/img/full white.png'
import React from 'react'
import { IoLogoTwitter } from 'react-icons/io';
import { IoLogoDiscord } from 'react-icons/io5';
import { RiTelegram2Fill } from 'react-icons/ri';
import { FaDiscord, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='bg-linear-180 md:h-[200px] from-black from-purple-950 to-black'>
            <section className='border md:px-20 border-gray-500 flex md:flex-row flex-col md:items-center justify-between mx-auto w-full p-8 backdrop-blur-sm bg-[rgba(255,255,255,0.1)]'>
                <nav className='flex items-center text-gray-200 gap-12 regular text-[14px] regular'>
                    <Link href={"#"}>Home</Link>
                    <Link href={"#"}>About</Link>
                    <Link href={"#"}>Projects</Link>
                    <Link href={"#"}>Resume</Link>
                </nav>
                <div className='flex items-center gap-4 md:mt-0 mt-3'>
                    <Link href={"https://x.com/onchainwithAde"} target='_blank' className='backdrop-blur-md border border-gray-500 rounded-[8px] bg-[rgba(255,255,255,0.1)] p-2'>
                        <IoLogoTwitter className='text-gray-300 text-2xl' />
                    </Link>
                    <Link href={"https://github.com/SamuelAdex"} target='_blank' className='backdrop-blur-md border border-gray-500 rounded-[8px] bg-[rgba(255,255,255,0.1)] p-2'>
                        <FaGithub className='text-gray-300 text-2xl' />
                    </Link>
                    <Link href={"https://t.me/onchainwithAde"} target='_blank' className='backdrop-blur-md border border-gray-500 rounded-[8px] bg-[rgba(255,255,255,0.1)] p-2'>
                        <RiTelegram2Fill className='text-gray-300 text-2xl' />
                    </Link>
                </div>
            </section>
            <section className='flex md:flex-row flex-col gap-4 items-center justify-between w-full md:px-20 p-8'>
                <div className='text-[14px] text-gray-500 regular'>&copy; The Beyonder 2026. All rights reserved</div>
                <div className='flex items-center gap-8 text-gray-500 regular text-[14px]'>
                    <Link href={"#"}>Privacy Policy</Link>
                    <Link href={"#"}>Terms of Service</Link>
                </div>
            </section>
        </footer>
    )
}

export default Footer