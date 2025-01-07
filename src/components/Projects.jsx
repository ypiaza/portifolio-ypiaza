import React from 'react'
import ItemProject from './ItemProject'

const Projects = () => {
  return (
    <div className=' h-[50rem] flex items-center justify-center flex-col gap-4 '>
      <div className='w-full h-[10%] flex items-center justify-center gap-14'>
        <h2 className='font-bold text-3xl text-cyan-600'>
          Projetos
        </h2>
      </div>
      <ItemProject />
    </div>
  )
}

export default Projects