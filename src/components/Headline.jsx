import React from 'react'

function Headline({title, alignment}) {
  return (
    <div>
    <div className='line-container p-[10px] mb-7'>
      <div className={`text ${alignment}  p-3 text-white text-shadow-custom text-2xl uppercase tracking-widest font-semibold  `}>{title}</div>
      <div className='flex justify-center items-center'>
      <div className="line h-[5px] rounded-3xl bg-white shadow-[0_0_10px_5px_rgba(110,12,12,1)] w-[60vw] align-middle"></div>
      </div>
    </div>
    </div>
  )
}

export default Headline
