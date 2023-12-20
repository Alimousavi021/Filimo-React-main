import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import SwiperNavButton from './SwiperNavButton';



import '../assets/master.css';

const SeriesDetails = ({ show, img, y, name, ename, kargardan, like, imdb, zhanr, kholase, time, swiper1, swiper2, swiper3, swiper4, swiper5, swiper6, swiper7, swiper8 }) => {
    return (
        <section className={`${show !== y ? 'hidden' : 'flex'}  w-full h-full bg-inherit flex`}>
            <div className='w-full h-[85%] relative flex justify-center items-center'>
                <figure className='absolute w-full h-full flex justify-center items-center'>
                    <img src={img} alt="" className='md:w-full md:h-full  h-full' />
                </figure>
                <div className='absolute w-full h-full flex flex-wrap justify-center content-center bg-[#00000098]'>
                    <h2 className='w-full mt-2 h-[50px]  flex items-center justify-start text-white font-melo text-[25px] tracking-wide ps-16'>{name}</h2>
                    <h3 className='w-full h-[50px]  flex items-center justify-start text-[#bbb5b5] font-melo text-[10px] tracking-wide ps-16'>{ename}</h3>
                    <h3 className='w-full h-[50px]  flex items-center justify-start text-[#bbb5b5] font-melo text-[15px] tracking-wide ps-16'>کارگردان : {kargardan}</h3>
                    <div className=' w-full h-[50px] flex items-center justify-start ps-16'>
                        <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#282828] flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#1cb561" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                            </svg>
                            <div className='text-[#1cb561] text-[12px] mx-1 font-melo'>{like}</div>
                        </span>
                        <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#282828] flex justify-center items-center'>
                            <div className='text-[#ecdf52] text-[10px] mx-1 font-serif'>IMDB</div>
                            <div className='text-[#ecdf52] text-[12px] font-melo'>{imdb}</div>
                        </span>
                        <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#282828] flex justify-center items-center'>

                            <div className='text-white text-[13px] mx-1 font-melo tracking-wider'>{zhanr}</div>
                        </span>

                    </div>
                    <p className='w-full h-[50px]  flex items-center justify-start text-white font-melo text-[12px] md:text-[15px] tracking-wide ps-16'>{kholase}</p>

                    {/* slider**************** */}
                    <div className='w-[85%] h-[200px] flex items-center'>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{
                                clickable: false,
                            }}

                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            className="mySwiper flex items-center justify-center relative mb-5"
                        >
                            <SwiperSlide className='relative'>
                                <img src={swiper1} alt="" className='blur-sm' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000077]'></div>
                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>فصل 1 قسمت 1</div>
                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={swiper2} alt="" className='blur-sm' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000077]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>فصل 1 قسمت 2</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={swiper3} alt="" className='blur-sm' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000077]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>فصل 1 قسمت 3</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={swiper4} alt="" className='blur-sm' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000077]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>فصل 1 قسمت 4</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={swiper5} alt="" className='blur-sm' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000077]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>فصل 1 قسمت 5</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={swiper6} alt="" className='blur-sm' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000077]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>فصل 1 قسمت 6</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={swiper7} alt="" className='blur-sm' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000077]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>فصل 1 قسمت 7</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={swiper8} alt="" className='blur-sm' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000077]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>فصل 1 قسمت 8</div>

                            </SwiperSlide>
                            <SwiperNavButton />

                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeriesDetails