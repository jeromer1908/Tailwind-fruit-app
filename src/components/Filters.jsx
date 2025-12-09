import React, { useState } from 'react'

const Filters = () => {
    const[select,setselect] = useState(1)
  return (
    <section className='my-10 py-3 w-3/5 md:4/6 mx-auto flex flex-col md:flex-row justify-around'>
        <button onClick={() => setselect(1)}
            className={`btn ${select === 1 ? 'bg-green-400 text-white' : 'text-slate-500'}`}>Latest</button>
        <button onClick={() => setselect(2)}
             className={`btn ${select === 2 ? 'bg-green-400 text-white' : 'text-slate-500'}`}>Bestseller</button>
        <button onClick={() => setselect(3)}
             className={`btn ${select === 3 ? 'bg-green-400 text-white' : 'text-slate-500'}`}>Special</button>
    </section>
  )
}

export default Filters