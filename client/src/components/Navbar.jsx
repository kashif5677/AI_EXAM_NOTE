import React from 'react'
import {motion} from 'motion/react'
import { useSelector } from 'react-redux'

function Navbar() {
    const {userData}=useSelector(state=>state.user)
    const credits=userData.credits
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
            {/*left*/}
            <div className='flex items-center gap-3'>
                    <img src="" alt="examnotes" />
                    <span className='text-lg hidden md:block font-semibold text-white'>
                        ExamNotes <span className='text-gray-400'> AI</span>
                    </span>
            </div>
            {/*right*/}
            <div className='flex itmes-center gap-6 relative '>
                <motion.div 
                whileHover={{scale:1.07}}
                whileTap={{scale:0.97}}
                className='flex items-center gap-1 
                    px-4 py-2 rounded-full
                    bg-white/10
                    border border-white/20
                    text-white text-sm
                    shadow-md
                    cursor-pointer'>
                        <span className='text-xl '>💠</span>
                        <span>{credits}</span>
                        <motion.span
                        whileHover={{scale:1.07}}
                        whileTap={{scale:0.97}}
                        className='ml-2 h-5 flex items-center justify-center rounded-full bg-white text-black text-xs font-bold'
                        >
                            ➕
                        </motion.span>

                    </motion.div>
            </div>
      
    </motion.div>
  )
}

export default Navbar
