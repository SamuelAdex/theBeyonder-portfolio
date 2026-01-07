"use client";

import React from 'react'
import { RiShieldCheckLine, RiStackLine, RiGlobalLine, RiServerLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Favourite = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className='bg-linear-180 grid min-h-screen md:px-0 px-6 py-16 place-items-center from-black from-purple-950 to-black'>
            <motion.div
                className="md:space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
            >
                <div className="md:text-[45px] text-[35px] mx-auto md:w-[900px] bg-linear-to-r from-[#c1c1c1] via-[#ffffff] to-[#7b7b7b] bg-clip-text text-transparent animate-gradient md:leading-[50px] leading-[40px] text-center semibold">
                    Engineering The Decentralized Future
                </div>
                <p className='text-center mx-auto md:w-[800px] md:text-[16px] mt-4 text-gray-400 regular'>
                    Bridging the gap between complex blockchain protocols and intuitive user experiences with a robust, full-stack approach.
                </p>
            </motion.div>
            <motion.section
                className='flex md:flex-row flex-col justify-center gap-8 md:w-[70%] w-full min-h-screen md:mt-8 mt-4'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <div className='flex flex-col gap-6 w-full'>
                    <motion.div variants={fadeInUp} className='backdrop-blur-md bg-white/5 border border-white/10 flex-[2] w-full p-8 rounded-[30px] hover:bg-white/10 transition-all duration-300 group'>
                        <div className='bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                            <RiShieldCheckLine className='text-purple-400 text-2xl' />
                        </div>
                        <h3 className='text-white text-xl semibold mb-2'>Secure Smart Contracts</h3>
                        <p className='text-gray-400 regular text-sm'>
                            Writing gas-optimized, audited Solidity code with a focus on reentrancy protection and logic integrity.
                        </p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className='backdrop-blur-md bg-white/5 border border-white/10 flex-[4] w-full p-8 rounded-[30px] relative overflow-hidden hover:bg-white/10 transition-all duration-300 group'>
                        <div className='absolute -right-10 -bottom-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all'></div>
                        <div className='bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                            <RiStackLine className='text-blue-400 text-2xl' />
                        </div>
                        <h3 className='text-white text-2xl semibold mb-3'>Full-Stack Architecture</h3>
                        <p className='text-gray-400 regular'>
                            Building end-to-end DApps using Next.js, Node.js, and modern Web3 libraries for seamless interaction.
                        </p>
                        <div className='mt-6 p-4 bg-black/20 rounded-xl border border-white/5'>
                            <div className='flex justify-between items-center mb-2'>
                                <span className='text-xs text-gray-500'>Stack Proficiency</span>
                                <span className='text-blue-400 text-xs font-bold'>Advanced</span>
                            </div>
                            <div className='flex gap-2 mt-2 flex-wrap'>
                                <span className='px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] text-blue-300'>React</span>
                                <span className='px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] text-blue-300'>Next.js</span>
                                <span className='px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] text-blue-300'>TypeScript</span>
                                <span className='px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-[10px] text-purple-300'>Solidity</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className='flex flex-col gap-6 w-full'>
                    <motion.div variants={fadeInUp} className='backdrop-blur-md bg-white/5 border border-white/10 flex-[4] w-full p-8 rounded-[30px] relative overflow-hidden hover:bg-white/10 transition-all duration-300 group'>
                        <div className='absolute -left-10 -top-10 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl group-hover:bg-pink-600/30 transition-all'></div>
                        <div className='bg-pink-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                            <RiGlobalLine className='text-pink-400 text-2xl' />
                        </div>
                        <h3 className='text-white text-2xl semibold mb-3'>Multi-Chain Integration</h3>
                        <p className='text-gray-400 regular mb-6'>
                            Seamlessly connecting user interfaces to Ethereum, Solana, and L2 networks with robust RPC handling.
                        </p>
                        <div className='flex gap-2'>
                            <span className='px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10'>Ethers.js</span>
                            <span className='px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10'>Wagmi</span>
                            <span className='px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10'>WalletConnect</span>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className='backdrop-blur-md bg-white/5 border border-white/10 flex-[2] w-full p-8 rounded-[30px] hover:bg-white/10 transition-all duration-300 group'>
                        <div className='bg-yellow-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                            <RiServerLine className='text-yellow-400 text-2xl' />
                        </div>
                        <h3 className='text-white text-xl semibold mb-2'>Robust Infrastructure</h3>
                        <p className='text-gray-400 regular text-sm'>
                            Scalable backend systems and indexers to handle high-throughput blockchain data efficiently.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </section>
    )
}

export default Favourite