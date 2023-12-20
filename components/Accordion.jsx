import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import AccordionVal from './AccordionVal';

const Accordions = () => {
    return (
        <section className='w-full h-[600px]  bg-[#1817178a] flex justify-center items-center'>
            <div className='w-full md:w-[90%]   flex flex-wrap content-center justify-center'>
                <h2 className='w-full h-[30px]  flex justify-center items-center text-white font-melo text-[25px] tracking-wider'>سوالات متداول</h2>
                <p className='w-full h-[30px]  flex justify-center items-center text-[#777575] font-melo text-[15px] tracking-wider'>سوال شایع دیگر کاربران شاید برای شما پیش آمده باشد</p>
                <div className=' w-full md:w-[80%]  flex flex-wrap justify-center content-center'>
                    <AccordionVal title={'آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟'} code={'بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر، هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات بیشتر می‌توانید فیلم‌های آموزشی مربوط به'} strong={'دانلود از طریق سایت و دانلود از طریق  اپلیکیشن را تماشا کنید.'} />
                    <AccordionVal title={'آیا فیلیمو برای خارج از ایران در دسترس است؟'} code={'خیر. درحال حاضر تماشای فیلیمو فقط در داخل کشور فعال است و امکان تماشا برای افراد خارج از کشور فعال نیست.'} />
                    <AccordionVal title={'آیا برای تماشای فیلم‌های اکران آنلاین، باید اشتراک بخرم؟'} code={'تماشای فیلم‌های اکران آنلاین مانند تماشا در سینمای واقعی است؛ یعنی برای دیدن هر فیلم که در اکران آنلاین است باید بلیت تهیه کنید و به جای رفتن به سالن سینما، 8 ساعت فرصت دارید که آن فیلم را از داخل خانه تماشا کنید.'} />
                    <AccordionVal title={'از کجا می‌توانم نرم‌افزار اندروید یا iOS فیلیمو را دانلود کنم؟'} code={'برای نصب نرم‌افزار اندرویدی فیلیمو می‌توانید ازطریق کافه بازار یا مایکت اقدام به دانلود کنید. یا می‌توانید روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید.'} strong={'(دانلود مستقیم نرم‌افزار اندروید) برای دانلود نرم‌افزار iOS فیلیمو نیز کافیست روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید. (دانلود مستقیم نرم‌افزار iOS)'} />

                </div>
            </div>
        </section>
    )
}

export default Accordions