import React, { useEffect, useRef, useState } from 'react'
import SeriesVal from './SeriesVal'
import SeriesDetails from './SeriesDetails'
import { neisan, zakhm, bahar, gonah, shot, neisanbg, neisanbg2, zakhmbg, baharbg, gonahbg, shotbg, n1, n2, n3, n4, n5, n6, n7, n8, z1, z2, z3, z4, z5, z6, z7, z8, b1, b2, b3, b4, b5, b6, b7, b8, s1, s2, s3, s4, s5, s6, s7, s8 } from '../assets/img/series'



const Series = ({ status }) => {
    const [focuss, setFocuss] = useState(1)
    const [focuss1, setFocuss1] = useState(1)
    const [focuss2, setFocuss2] = useState(10)
    const [focuss3, setFocuss3] = useState(11)
    const [focuss4, setFocuss4] = useState(12)
    const [focuss5, setFocuss5] = useState(13)

    const focus1 = (index) => {
        setFocuss(index)
        setFocuss1(index)

    }
    const focus2 = (index) => {
        setFocuss2(index)
        setFocuss(index)

    }
    const focus3 = (index) => {
        setFocuss3(index)
        setFocuss(index)

    }
    const focus4 = (index) => {
        setFocuss4(index)
        setFocuss(index)

    }
    const focus5 = (index) => {
        setFocuss5(index)
        setFocuss(index)

    }


    return (
        <>

            <section className={`${status === 2 ? 'hidden' : 'flex'}  w-full h-[290px] items-center bg-inherit flex overflow-x-scroll md:overflow-auto`}>
                <div className='flex w-[1400px] md:w-full h-full justify-center items-center'>
                    <SeriesVal img={neisan} focus={() => focus1(1)} focusn={focuss} x={focuss1} />
                    <SeriesVal img={zakhm} focus={() => focus2(2)} focusn={focuss} x={focuss2} />
                    <SeriesVal img={bahar} focus={() => focus3(3)} focusn={focuss} x={focuss3} />
                    <SeriesVal img={gonah} focus={() => focus4(4)} focusn={focuss} x={focuss4} />
                    <SeriesVal img={shot} focus={() => focus5(5)} focusn={focuss} x={focuss5} />
                </div>
            </section>
            <section className={`${status === 2 ? 'hidden' : 'flex'} flex bg-inherit w-full h-[550px]`}>
                <SeriesDetails img={neisanbg2} show={focuss} y={focuss1} name={'نیسان آبی'} ename={'Blue Nissan S02E03'} kargardan={'سید مسعود اطیابی'} like={'88%'} imdb={'3.2'} zhanr={'کمدی'} kholase={'جمشید قاسم‌پور، متهم به قتل آتوسا اسماعیلی، وی مقتوله را به قتل رسانده و جسد را در نیسان آبی و در کنار جاده رها کرده است!'} time={'بالای 15 سال - یک ساعت و 34 دقیقه - محصول ایران - 1385 - کیفیت HD'} swiper1={n1} swiper2={n2} swiper3={n3} swiper4={n4} swiper5={n5} swiper6={n6} swiper7={n7} swiper8={n8} />


                <SeriesDetails img={zakhmbg} show={focuss} y={focuss2} name={'زخم کاری : بازگشت'} ename={'Mortal Wound: Return S02E13'} kargardan={'محمدحسین مهدویان'} like={'77%'} imdb={'7.1'} zhanr={'درام'} kholase={'میثم که دیگر چیزی برای از دست دادن ندارد، بی پرواتر از همیشه به دل خطر می‌زند تا از طلوعی انتقام بگیرد. هنوز بوی خون به مشا'} time={'بالای 15 سال - یک ساعت و 43 دقیقه - محصول ایران - 1396 - کیفیت HD'} swiper1={z1} swiper2={z2} swiper3={z3} swiper4={z4} swiper5={z5} swiper6={z6} swiper7={z7} swiper8={z8} />


                <SeriesDetails img={baharbg} show={focuss} y={focuss3} name={'مگه تموم عمر چندتا بهاره'} ename={'You Only Go Around Once S01E23'} kargardan={'سروش صحت'} like={'93%'} imdb={'4.8'} zhanr={'مستند'} kholase={'مسافران قشم به اصفهان رسیده‌اند. جلال که می‌خواهد شهرام راه متقاعد کند به‌‌همراه رزاقی راهی فرودگاه می‌شوند. ولی اتفاقی در را...'} time={'بالای 18 سال - 38 دقیقه - محصول ایران - 1402 - کیفیت HD'} swiper1={b1} swiper2={b2} swiper3={b3} swiper4={b4} swiper5={b5} swiper6={b6} swiper7={b7} swiper8={b8} />


                <SeriesDetails img={gonahbg} show={focuss} y={focuss4} name={'گناه فرشته'} ename={'Fereshtehs Sin S01E01'} kargardan={'حامد عنقا'} like={'0%'} imdb={'2.9'} zhanr={'درام'} kholase={'آتیش چیز بدی نیست، اونچه اضافه اس رو می سوزونه، چیزی موندنی باشه می مونه!'} time={'بالای 15 سال - یک ساعت و 58 دقیقه - محصول ایران - 1387 - کیفیت HD'} />


                <SeriesDetails img={shotbg} show={focuss} y={focuss5} name={'2 شات'} ename={'2Shot S01E10'} kargardan={'علی میرمیرانی'} like={'89%'} imdb={'5.7'} zhanr={'تاک شو'} kholase={'علی میرمیرانی در دهمین قسمت ۲شات گفت و گویی متفاوت با بهار کاتوزی دارد. بهار کاتوزی نویسنده و بازیگر که این روزها در سریا...'} time={'بالای 18 سال - یک ساعت و 31 دقیقه - محصول ایران - 1396 - کیفیت HD'} swiper1={s1} swiper2={s2} swiper3={s3} swiper4={s4} swiper5={s5} swiper6={s6} swiper7={s7} swiper8={s8} />
            </section>
        </>
    )
}

export default Series