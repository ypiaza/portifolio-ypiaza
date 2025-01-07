import React from 'react'
import { projects } from '../data/project'

const ItemProject = () => {
  return (
    <div className='w-[100%] grid grid-cols-3 gap-[0.2rem] items-center justify-center'>
          {projects.map(item => (
            <div className='bg-cyan-600 flex items-center justify-center flex-col gap-3 p-4 rounded hover:shadow-2xl hover:shadow-cyan-500 duration-300 hover:bg-cyan-500 h-full w-full'>
              <h2 className='font-bold text-gray-100'>{item.name}</h2>
              <h4 className='font-bold text-gray-100 text-sm'>Projeto feito com: <span className='font-normal'>{item.skills}</span></h4>
              <div>
                <img className='rounded shadow-md' src={item.img} />
              </div>
              <a className='font-bold text-sm text-gray-100' href={item.link} target='_blank'>Link:<span className='font-normal'> {item.name}</span></a>
            </div>
          ))}
      </div>     
  )
}

export default ItemProject