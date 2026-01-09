"use client";

import Image from 'next/image';
import React from 'react';
import logo22 from '@/public/img/logo 22.png';
import { RiCheckLine } from 'react-icons/ri';
import { motion } from 'framer-motion';


const Feature = () => {

    const projects = [
        {
            video: "https://res.cloudinary.com/samueladexcloudinary/video/upload/v1767656357/Screen_Recording_2026-01-06_001545_duvoth.mp4",
            link: "https://blockroll.app/",
            description: "A seamless payroll and invoicing solution for modern businesses."
        },
        {
            video: "https://res.cloudinary.com/samueladexcloudinary/video/upload/v1767656383/Screen_Recording_2026-01-06_001202_clwhhz.mp4",
            link: "https://astrality-development.vercel.app/",
            description: "A cutting-edge real world assets Landing Page showcasing top-tier development projects."
        },
        {
            video: "https://res.cloudinary.com/samueladexcloudinary/video/upload/v1767655996/Screen_Recording_2026-01-06_001321_ryxtvh.mp4",
            link: "https://litpad.app/",
            description: "An innovative platform for readers and writers to connect and share stories."
        },
        {
            video: "https://res.cloudinary.com/samueladexcloudinary/video/upload/v1767656267/Screen_Recording_2026-01-06_001802_n5mdqq.mp4",
            link: "https://apextrustinternationalltd.com.ng/",
            description: "Corporate website for Apex Trust International, delivering excellence."
        },
        {
            video: "https://res.cloudinary.com/samueladexcloudinary/video/upload/v1767699270/Screen_Recording_2026-01-06_002429_gxel6k.mp4",
            link: "https://bishopmosesanozieministries.com/",
            description: "Official ministry website dedicated to spreading the gospel and outreach."
        },
        {
            video: "https://res.cloudinary.com/samueladexcloudinary/video/upload/v1767789795/Screen_Recording_2026-01-07_134040_y9apnm.mp4",
            link: "https://eimperialhomesltd.com/",
            description: "Premium real estate solutions for finding your perfect dream home."
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    };

    return (
        <section id="project" className='bg-linear-360 md:px-0 px-6 grid py-16 place-items-center from-black from-purple-950 to-black'>
            <div className='md:w-[80%] w-full'>
                <motion.div
                    className="md:space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="md:text-[45px] text-[30px] md:w-[900px] md:leading-[50px] semibold bg-linear-to-r from-[#c1c1c1] via-[#ffffff] to-[#7b7b7b] bg-clip-text text-transparent animate-gradient">Awesome Things, I've been up to</div>
                    <p className='md:w-[800px] md:text-[16px] text-gray-400 regular'></p>
                </motion.div>

                <motion.div
                    className='w-full grid md:grid-cols-3 grid-cols-1 gap-6 mt-8'
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={item} className='backdrop-blur-md bg-[rgba(255,255,255,0.1)] border border-gray-500 flex-2 w-full p-6 rounded-[20px]'>
                            <div className='bg-[rgba(255,255,255,0.1)] rounded-[100%] grid place-items-center w-[40px] h-[40px]'>
                                <RiCheckLine className='text-white' />
                            </div>
                            <Image
                                src={project.video.replace("/upload/", "/upload/f_gif,q_auto,w_400/").replace(".mp4", ".gif")}
                                alt='Project Preview'
                                width={300}
                                height={300}
                                unoptimized
                                className='h-[160px] mt-3 w-full rounded-[12px] object-cover'
                            />
                            <p className='text-gray-300 text-sm mt-3 leading-relaxed'>{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='block text-center w-fit backdrop-blur-md py-2 px-4 text-white regular md:text-[14px] bg-[rgba(255,255,255,0.0)] cursor-pointer border border-gray-500 rounded-[8px] mt-3 hover:bg-[rgba(255,255,255,0.1)] transition-colors'
                            >
                                Visit
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Feature