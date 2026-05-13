import React from 'react'
import {motion} from 'framer-motion'
function Footer() {
  return (
    <motion.div 
        initial={{y:15,opacity:0}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.6}}
        className="z-10 mx-6 mb-6 mt-24
        rounded-2xl
        bg-gradient-to-br from-black/90 via-black/80 to-black/90
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_22px_55px_rgba(0,0,0,0.75)]
        px-8 py-4"
    >
      
    </motion.div>
  )
}

export default Footer
