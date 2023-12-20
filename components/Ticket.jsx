import React from 'react'
import '../assets/master.css'

const Ticket = ({name,img,kargardan,like,zhanr}) => {
    return (
        <div className='w-[550px] cursor-pointer tg-custom lg:w-[40%]  h-[250px] border-[.2px] border-gray-500 rounded-lg m-2 flex flex-wrap content-start'>
            <figure className=' h-[87%] w-[30%] rounded-md ms-3 my-3'>
                <img src={img} alt="" className='w-full h-full object-cover rounded-md' />
            </figure>
            <div className=' h-full w-[60%] flex flex-wrap content-center'>
                <h3 className='h-[40px] w-full  flex justify-between items-center text-white text-[18px] font-melo mt-3 tracking-wider'>{name}
                    <div className='bg-[#0a0a0a68] w-[80px] h-[25px] rounded-[20px] ml-1 flex justify-center items-center font-melo text-[12px]'>
                        <svg className='rotate90 rotate-[90]' xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" class="bi bi-ticket" viewBox="0 0 16 16">
                            <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
                        </svg>
                        اکران آنلاین</div>
                </h3>
                <p className='w-full h-[40px]  flex items-center justify-start text-[#999797] font-melo tracking-wider text-[15px]'>کارگردان: {kargardan}</p>

                <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#282828] flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#1cb561" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                    <div className='text-[#1cb561] text-[12px] mx-1 font-melo'>{like}</div>
                </span>
                <div className='w-full flex items-center justify-start h-[50px]'>
                <span className='mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#0a0a0a68] flex justify-center items-center'>
                    
                    <div className='text-white text-[12px] mx-1 font-melo tracking-wider flex justify-center items-center'>{zhanr}</div>
                </span>
                </div>

                <div className='w-full h-[60px]  flex items-center justify-start'>
                    <span className='mb-3 flex justify-center items-center h-[42px] w-[75px] ms-2 rounded-lg text-white font-melo tracking-wider text-[13px] border'>خرید بلیت</span>
                </div>

            </div>
        </div>
    )
}

export default Ticket