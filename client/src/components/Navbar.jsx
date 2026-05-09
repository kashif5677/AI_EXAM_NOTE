import React from 'react'
import {motion} from 'motion/react'

function Navbar() {
  return (
    <motion.div 
    initial={{y:-15,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:2}}
    className='relative z-20 mx-6 mt-6
         rounded-2xl
         bg-gradient-to-br from-black/90 via-black/80 to-black/90
         backdrop-blur-2xl
         border border-white/10
         shadow-[0_22px_55px_rgba(0,0,0,0.75)]
         flex items-center justify-between px-8 py-4'>
      
    </motion.div>
  )
}

export default Navbar
