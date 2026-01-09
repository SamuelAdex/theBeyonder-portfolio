"use client";

import Link from 'next/link';
import React from 'react'
import logo from '@/public/img/full white.png'
import Image from 'next/image';
import { IoLogoTwitter } from 'react-icons/io';
import { IoLogoDiscord } from 'react-icons/io5';
import { RiTelegram2Fill } from 'react-icons/ri';
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';

const Header = () => {
    return (
        <header className='fixed w-full top-0 z-20'>
            <section className='md:w-[90%] flex items-center justify-between mx-auto w-full md:p-8 p-6'>
                <nav className='md:flex hidden items-center border border-gray-500 text-gray-200 gap-12 regular text-[14px] regular backdrop-blur-sm bg-[rgba(255,255,255,0.1)] py-5 px-8 rounded-[80px]'>
                    <Link href={"#home"}>Home</Link>
                    <Link href={"#about"}>About</Link>
                    <Link href={"#project"}>Projects</Link>
                    <Link target='_blank' href={"https://drive.google.com/file/d/139aeZMJEm6MnFtDzfxBu8NXSpo7CjBs6/view?usp=sharing"}>Resume</Link>
                </nav>
                <div className='flex items-center gap-3'>
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
        </header>
    )
}

export default Header;