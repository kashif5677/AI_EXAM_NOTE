import React from 'react'
import {motion} from 'framer-motion'

function Auth() {
  return (
    <div className='min-h-screen overflow-hidden bg-white text-black px-8'>
      <motion.header 
      initial={{opacity:0,y:-15}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
        className='max-w-7xl mx-auto mt-8
            rounded-2xl bg-black/80 backdrop-blur-xl 
             px-8 py-4
             shadow-[0_20px_45px_rgba(0,0,0,0.6)'
            id="header"
      >

      </motion.header>
      
  
    </div>
  )
}

export default Auth
