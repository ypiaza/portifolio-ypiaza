import React from 'react'
import { projects } from '../data/project'
import { div } from 'framer-motion/client'

const Projects = () => {
  return (
    <div className=' h-[50rem] flex items-center justify-center flex-col '>
      <div className='w-full h-[10%] flex items-center justify-center gap-14'>
        <h2 className='font-bold text-3xl text-cyan-500'
          style={{
            backgroundImage: "url('./src/assets/bg-text.jpg')",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Projetos</h2>
      </div>
      <div className='w-[90%] grid grid-cols-3 gap-1 items-center justify-center'>
          {projects.map(item => (
            <div className='bg-cyan-600 flex items-center justify-center flex-col gap-3 p-4 rounded hover:shadow-2xl hover:shadow-cyan-500 duration-300 hover:bg-cyan-500'>
              <h2>{item.name}</h2>
              <h4>Projeto feito com: {item.skills}</h4>
              <div>
                <img src={item.img} />
              </div>
              <a href={item.link} target='_blank'>Link: {item.name}</a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Projects