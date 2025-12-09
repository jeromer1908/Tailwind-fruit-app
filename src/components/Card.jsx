import React from 'react';

const Card = ({ fruit }) => {
  if (!fruit) return null;

  return (
    <div className="rounded-2xl overflow-hidden  shadow-lg tranform group hover:scale-110 duration-100 relative">
      <img
        src={`/assets/${fruit.image}.jpeg`} 
        alt={fruit.name}
        className="w-full h-52 object-cover"
      />
      <div className="flex flex-col items-center my-1 space-y-1">
        <span className="font-body text-slate-500 block">{fruit.name}</span>
        <span className="font-body text-slate-500">₹{fruit.price}</span>
        <span className='font-body text-xs text-lime-400 group-hover:visible invisible'>ADD To CART</span>
      </div>
      <span className='absolute top-3 right-3 bg-sky-300 text-white rounded-lg border-sky-300 p-1
      text-sm'>1% off</span>
    </div>
  );
};

export default Card;
