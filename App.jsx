import { useEffect, useRef, useState } from 'react'
import './assets/master.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Movie from './components/Movie'
import Device from './components/Device'
import Tv from './components/Tv'
import Raygan from './components/Raygan'
import Kid from './components/Kid'
import Cinama from './components/Cinama'
import Accordion from './components/Accordion'
import Footer from './components/Footer'


export default function App() {



    return (
        <main class="bg-[#151515] w-full 2xl:container mx-auto overflow-x-hidden flex flex-wrap relative">
            <Header />
            <Hero />
            <Movie />
            <div className='w-full flex flex-wrap h-[2000px] md:h-[1000px]'>
            <Device />
            <Tv />
            </div>
            <Raygan />
            <div className='w-full flex flex-wrap h-[2500px] md:h-[1150px]'>
            <Kid />
            <Cinama />
            </div>
            <Accordion />
            <Footer />
            
        </main>
    )
}


