import React from 'react'
import '../assets/master.css'
import he1 from '../assets/img/he1.jpeg'
import he2 from '../assets/img/he2.jpeg'
import he3 from '../assets/img/he3.jpeg'
import he4 from '../assets/img/he4.jpeg'
import he5 from '../assets/img/he5.jpeg'
import he6 from '../assets/img/he6.jpeg'

const Hero = () => {
    return (
        <section className='w-full flex flex-wrap items-end h-[600px] relative'>
            <section className='h-[550px] w-full absolute left-0 top-[55px]'>
                <figure className='relative'>
                    <img src={he1} alt="" className='h-[500px] w-full object-cover absolute top-0 left-0 animate-hero animate-delay0' />
                    <img src={he2} alt="" className='h-[500px] w-full object-cover absolute top-0 left-0 animate-hero animate-delay4' />
                    <img src={he3} alt="" className='h-[500px] w-full object-cover absolute top-0 left-0 animate-hero animate-delay8' />
                    <img src={he4} alt="" className='h-[500px] w-full object-cover absolute top-0 left-0 animate-hero animate-delay12' />
                    <img src={he5} alt="" className='h-[500px] w-full object-cover absolute top-0 left-0 animate-hero animate-delay16' />
                    <img src={he6} alt="" className='h-[500px] w-full object-cover absolute top-0 left-0 animate-hero animate-delay20' />

                </figure>
                <div className='absolute top-0 left-0 bg-[#00000098] w-full h-[91%] flex justify-center items-end'>
                    <div className='w-full  h-[90%] flex flex-wrap content-center justify-center'>
                        <p className=' w-full h-[70px] tracking-wide text-orange-400 font-melo flex items-center justify-center text-[20px]'>با فیلیمو بی وقفه فیلم ببین</p>
                        <h2 className=' w-full h-[80px] tracking-wide flex justify-center items-center font-melo text-white text-[45px]'>کنترل همیشه دست توست!</h2>
                        <div className='h-[70px] w-full md:w-[30%] flex justify-center items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            <h3 className='mx-2  tracking-wide font-melo text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>نود هزار ابیزود فیلم و سریال برای تماشا داری</h3>
                        </div>
                        <div className='h-[70px] w-full md:w-[30%] flex justify-center items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            <h3 className='mx-2  tracking-wide font-melo text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>می تونی دانلود کنی بعد بدون اینترنت تماشا کنی</h3>
                        </div>
                        <div className='h-[70px] w-full md:w-[30%] flex justify-center items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            <h3 className='mx-2  tracking-wide font-melo text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>می تونی یک عضو , مخصوص تماشای کودک بسازی</h3>
                        </div>

                        <button className='h-[55px] w-[260px] duration-500 hover:bg-[#367b55] mx3 rounded-[8px] bg-[#1cb561] flex justify-center items-center '>
                            <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" class="bi bi-play-btn" viewBox="0 0 16 16">
                                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            </svg>
                            <div className='text-[21px] text-white mx-2 font-melo tracking-wider'> خرید اشتراک و تماشا</div>

                        </button>
                        <div className='w-full flex justify-center items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" class="bi bi-gift-fill" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07M9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                            </svg>
                            <p className='mt-3 font-melo tracking-wider text-[#bbb5b5] text-[13px] mx-2 flex justify-center items-center'>تخفیف ویژه برای کاربران جدید</p>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default Hero