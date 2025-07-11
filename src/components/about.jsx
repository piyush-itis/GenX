import React from 'react'
import FadeUp from './OnscrollAni/fadeup'

const About = () => {
    return (
        <>
            <div className='h-[10vh] bub w-[100vw] px-[5vw] pb-5'> </div>
            <div className='z-10 text-white bg' id='about'>
                {/* Clean Title */}
                <div className='text-center py-16'>
                    <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                        About Us
                    </h1>
                </div>

                {/* Clean Content Cards */}
                <div className='max-w-6xl mx-auto px-6 lg:px-8 space-y-16'>
                    {/* 0xGenIgnite Card */}
                    <FadeUp>
                        <div className='relative p-8 md:p-12 rounded-3xl bg-black/20 backdrop-blur-md border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group'>
                            <div className='flex items-start gap-6'>
                                <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                    🚀
                                </div>
                                <div className='flex-1'>
                                    <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                                        0xGenIgnite
                                    </h2>
                                    <p className='text-lg text-gray-300 leading-relaxed'>
                                        Welcome to 0xGenIgnite, the ultimate battlefield where brilliance meets code, and the future gets built. Spanning three electrifying days, this flagship event isn't just a hackathon- it's a high-voltage launchpad for Gen-Z innovators ready to disrupt the world. Starting with an inspiring celebrity-led kickoff, diving into a 24-hour no-sleep, all-brain hackathon, and climaxing with a grand finale at the Google Office, Gurugram- this is where bold ideas are forged into reality. AI, Web3 or something the world hasn't seen yet. If you've got the spark, 0xGenIgnite is here to set it ablaze.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    {/* CodeX Card */}
                    <FadeUp delay={0.2}>
                        <div className='relative p-8 md:p-12 rounded-3xl bg-black/20 backdrop-blur-md border border-white/10 hover:border-red-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 group'>
                            <div className='flex items-start gap-6'>
                                <div className='w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                    💻
                                </div>
                                <div className='flex-1'>
                                    <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent'>
                                        CodeX
                                    </h2>
                                    <p className='text-lg text-gray-300 leading-relaxed'>
                                        CodeX empowers coders, creators, and future founders with real-world projects, expert sessions, challenges, and mentorship—fueling ambition, learning, and innovation across all CSE domains.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>

                {/* Clean Themes Section */}
                <div className='text-center py-16 mt-20'>
                    <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12'>
                        Themes
                    </h1>
                    
                    <div className='max-w-6xl mx-auto px-6 lg:px-8'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {/* Web3 Card */}
                            <FadeUp>
                                <div className='relative h-64 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 group overflow-hidden'>
                                    <div className='absolute inset-0 bg-[url("/images/web3.png")] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                                    <div className='absolute bottom-6 left-6 right-6'>
                                        <h3 className='text-2xl font-bold text-white'>Web3</h3>
                                    </div>
                                </div>
                            </FadeUp>

                            {/* AI x Web3 Fusion Card */}
                            <FadeUp delay={0.2}>
                                <div className='relative h-64 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 hover:border-pink-400/30 transition-all duration-500 hover:scale-105 group overflow-hidden'>
                                    <div className='absolute inset-0 bg-[url("/images/fusion.png")] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                                    <div className='absolute bottom-6 left-6 right-6'>
                                        <h3 className='text-2xl font-bold text-white'>AI x Web3 Fusion</h3>
                                    </div>
                                </div>
                            </FadeUp>

                            {/* AI Card */}
                            <FadeUp delay={0.4}>
                                <div className='relative h-64 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 group overflow-hidden'>
                                    <div className='absolute inset-0 bg-[url("/images/ai.png")] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                                    <div className='absolute bottom-6 left-6 right-6'>
                                        <h3 className='text-2xl font-bold text-white'>AI</h3>
                                    </div>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
