import React, { useEffect, useRef, useState } from 'react'
import FilmVal from './FilmVal'
import FilmDetails from './FilmDetails'
import { park, rag, mostanad, eli, darkub, parkbg, ragbg, mosbg, elibg, darkubbg } from '../assets/img/film'


const Film = ({ status }) => {
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

            <section className={`${status === 1 ? 'hidden' : 'flex'}  w-full h-[290px] items-center bg-inherit flex overflow-x-scroll md:overflow-auto`}>
                <div className='flex w-[1400px] md:w-full h-full justify-center items-center'>
                    <FilmVal img={park} focus={() => focus1(1)} focusn={focuss} x={focuss1} />
                    <FilmVal img={rag} focus={() => focus2(2)} focusn={focuss} x={focuss2} />
                    <FilmVal img={mostanad} focus={() => focus3(3)} focusn={focuss} x={focuss3} />
                    <FilmVal img={eli} focus={() => focus4(4)} focusn={focuss} x={focuss4} />
                    <FilmVal img={darkub} focus={() => focus5(5)} focusn={focuss} x={focuss5} />
                </div>
            </section>
            <section className={`${status === 1 ? 'hidden' : 'flex'} flex bg-inherit w-full h-[500px]`}>
                <FilmDetails img={parkbg} show={focuss} y={focuss1} name={'پارک وی'} ename={'Parkway'} kargardan={'فریدون جیرانی'} like={'75%'} imdb={'3.5'} zhanr={'درام'} kholase={'آشنایی رها با کوهیار که مبتلا به اختلال روانی است خیلی زود به ازدواج ختم می شود. اما از همان روز اول کوهیار شروع به آزار دادن...'} time={'بالای 15 سال - یک ساعت و 34 دقیقه - محصول ایران - 1385 - کیفیت HD'} />


                <FilmDetails img={ragbg} show={focuss} y={focuss2} name={'رگ خواب'} ename={'Subdued'} kargardan={'حمید نعمت الله'} like={'87%'} imdb={'6.1'} zhanr={'درام'} kholase={'فیلم تحسین شده رگ خواب با بازی لیلا حاتمی و کارگردانی حمید نعمت الله داستان مینا زنی که تازه طلاق گرفته و به دنبال خانه و ک... '} time={'بالای 15 سال - یک ساعت و 43 دقیقه - محصول ایران - 1396 - کیفیت HD'} />


                <FilmDetails img={mosbg} show={focuss} y={focuss3} name={' مستند دوبله اوبنهایمر'} ename={'Oppenheimer Dub Documentary'} kargardan={'آرمین به امیدحق'} like={'93%'} imdb={'1.7'} zhanr={'مستند'} kholase={'مستندی از روند و مراحل دوبله فیلم «اوپنهایمر» ساخته کریستوفر نولان.'} time={'بالای 18 سال - 38 دقیقه - محصول ایران - 1402 - کیفیت HD'} />


                <FilmDetails img={elibg} show={focuss} y={focuss4} name={'درباره الی'} ename={'About Elly'} kargardan={'اصغر فرهادی'} like={'90%'} imdb={'7.9'} zhanr={'درام'} kholase={'داستان فیلم درباره الی به کارگردانی اصغر فرهادی روایت گر زندگی چند خانواده است که برای گذراندن تعطیلات به شمال کشور سفر ...'} time={'بالای 15 سال - یک ساعت و 58 دقیقه - محصول ایران - 1387 - کیفیت HD'} />


                <FilmDetails img={darkubbg} show={focuss} y={focuss5} name={'دارکوب'} ename={'Axing'} kargardan={'بهروز شعیبی'} like={'93%'} imdb={'5.7'} zhanr={'درام'} kholase={'«دارکوب» فیلمی به کارگردانی بهروز شعیبی و به تهیه کنندگی سید محمود رضوی محصول سال ۱۳۹۶ است. این فیلم داستان اجتماعی ...'} time={'بالای 18 سال - یک ساعت و 31 دقیقه - محصول ایران - 1396 - کیفیت HD'} />
            </section>
        </>

    )
}

export default Film