import React, { useState } from 'react'

const FilmVal = ({img,focus,focusn,x}) => {
    
  return (
    <div className='w-[200px] h-[250px] rounded-[15px] mx-5 mb-4'>
        <img onClick={focus} src={img} alt="" className={`${focusn===x?'scale-[1] border':'scale-[.8]'} cursor-pointer duration-500 object-cover w-full h-full rounded-[15px]`} />
    </div>
  )
}

export default FilmVal