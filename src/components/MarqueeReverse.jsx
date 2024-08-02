import React from 'react'

const MarqueeReverse = () => {
  return (
    <div className='marquee-parent list-none h-screen bg-white text-black whitespace-nowrap overflow-hidden uppercase px-0 py-3 text-2xl tracking-wide font-electroharmonic '>
    <ul className="marquee-content h-full w-full flex animate-marqueereverse">
      <li className="list-items">Think.</li>
      <li className="list-items">Design.</li>
      <li className="list-items">Develop.</li>
      <li className="list-items">Create.</li>
      <li className="list-items">Think.</li>
      <li className="list-items">Design.</li>
      <li className="list-items">Develop.</li>
      <li className="list-items">Create.</li>
      <li className="list-items">Think.</li>
      <li className="list-items">Design.</li>
      <li className="list-items">Develop.</li>
      <li className="list-items">Create.</li>
    </ul>
    </div>
  )
}

export default MarqueeReverse