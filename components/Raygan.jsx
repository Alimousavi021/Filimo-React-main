import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import SwiperNavButton from './SwiperNavButton';
import { r1,r2,r3,r4,r5,r6,r7,r8,r9,r10 } from '../assets/img/raygan';

const Raygan = () => {
  return (
    <section className='w-full  h-[300px] flex flex-wrap justify-center items-center'>
        <h2 className='w-full h-[50px] flex items-center justify-start ps-28 text-white font-melo text-[25px]'>فیلم های رایگان</h2>
        <div className='w-[85%]  h-[200px] flex items-center'>

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
                            className="mySwiper flex items-center justify-center relative"
                        >
                            <SwiperSlide className='relative'>
                                <img src={r1} alt="" className='' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>
                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>عقرب</div>
                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={r2} alt="" className='' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>شب های مافیا 2</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={r3} alt="" className='' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>دراکولا</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={r4} alt="" className='' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>ملکه گدایان</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={r5} alt="" className='' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>شب های مافیا</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={r6} alt="" className='' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>دل</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={r7} alt="" className='' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>سال های دور از خانه</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={r8} alt="" className='' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>پایتخت </div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={r9} alt="" className='' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>سجاده آتش</div>

                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={r10} alt="" className='' />
                                <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>

                                <div className='absolute bottom-1 right-3 z-10 text-white font-melo text-[16px]'>دیرین دیرین</div>

                            </SwiperSlide>
                            <SwiperNavButton />

                        </Swiper>


        </div>
    </section>
  )
}

export default Raygan