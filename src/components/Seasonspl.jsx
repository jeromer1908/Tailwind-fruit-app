import React, { useState } from 'react'
import Card from './Card';

const Seasonspl = () => {
    const[fruits,setfruits] = useState([
          {
      id: 7,
      image: "7",
      name: "Orange",
      price: 100,
    },
    {
      id: 1,
      image: "1",
      name: "Green Grapes",
      price: 100,
    },
    {
      id: 6,
      image: "6",
      name: "lemon",
      price: 150,
    }

    ])
  return (
    <section className='w-5/6 mx-auto my-10'>
        <div className= 'relative'>
            {/* divide */}
            <div className='absolute inset-0 flex items-center'>
               <div className='border border-slate-400 w-9/12 mx-auto'></div>
            </div>
            {/* text */}
            <div className='flex justify-center relative'>
                <div className='font-display text-slate-500 text-4xl bg-white'>Season Specials</div>
            </div>
        </div>

        <div className="max-w-6xl mx-auto my-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {fruits.map((fruit) => (
          <Card key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </section>
  );
};

export default Seasonspl;