import React from 'react'
import cinama from '../assets/img/cinama.png'
import Ticket from './Ticket'
import { ttehran,tparvande,tmolaqat,tdast } from '../assets/img/ticket'

const Cinama = () => {
    return (
        <section className='w-full h-[1400px] md:h-[750px]  flex flex-wrap cinama items-center justify-center relative'>
            <figure className='w-full h-full absolute left-0 top-0'>
                <img src={cinama} alt="" className='object-cover blur-[3px] w-full h-full absolute left-0 top-0' />
            </figure>
            <div className='absolute w-full h-full left-0 top-0 bg-[#00000031] flex flex-wrap justify-center items-center'>
                <div className=' w-[90%] h-[90%] flex flex-wrap justify-center content-center'>
                    <h2 className='mt-2 w-full  h-[40px] flex justify-center items-center text-white font-melo text-[25px] tracking-wider'>سینما آنلاین فیلیمو</h2>

                    <div className='h-[35px]  w-full md:w-[30%] flex justify-center items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <h3 className='mx-2 tracking-wide font-melo text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>فیلم‌های روز سینمای ایران</h3>
                    </div>
                    <div className='h-[35px] w-full md:w-[30%] flex justify-center items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <h3 className='mx-2 tracking-wide font-melo text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>۸ ساعت زمان برای مشاهده فیلم در هر کجا</h3>
                    </div>
                    <div className='h-[35px] w-full md:w-[30%] flex justify-center items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1cb561" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <h3 className='mx-2 tracking-wide font-melo text-[rgba(255,255,255,.75)] text-[16px] md:text-[18px]'>خرید یک بلیت برای تماشا همراه با همه خانواده</h3>
                    </div>
                    {/* tickets******************8 */}

                    <div className='w-full flex flex-wrap md:h-[550px] justify-center items-center'>
                        <Ticket img={tdast} name={'داستان دست انداز'} kargardan={'کمال تبریزی'} like={'60%'} zhanr={'فانتزی'} />
                        <Ticket img={tparvande} name={'پرونده باز است'} kargardan={'کیومرث پوراحمد'} like={'67%'} zhanr={'خانوادگی'} />
                        <Ticket img={ttehran} name={'تهران : شهر عشق'} kargardan={'علی جابر انصاری'} like={'63%'} zhanr={'کمدی'} />
                        <Ticket img={tmolaqat} name={'ملاقات خصوصی'} kargardan={'امید شمس'} like={'92%'} zhanr={'درام'} />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Cinama