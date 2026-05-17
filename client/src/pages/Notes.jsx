import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
function Notes() {
  const navigate=useNavigate()
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8'> 
       <motion.header
      initial={{y:-15,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}

      className='mb-10 
      rounded-2xl bg-black/80 backdrop-blur-xl 
      border border-white/10
      px-8 py-6
      shadow-[0_20px_45px_rgba(0,0,0,0.6)] items-start
      flex md:items-center justify-between gap-4 flex-col md:flex-row
      '>
        <div onClick={()=>navigate("/")} className='cursor-pointer'>
              <h1 className='text-2xl font-bold bg-linear-to-r from-white via-gray-400 to-white bg-clip-text text-transparent'>
            ExamNotes AI
        </h1>
        <p className='text-sm text-gray-400 mt-1'>
            AI-powered exam-oriented nots & revision
        </p>
        </div>

      </motion.header>
    </div>
  )
}

export default Notes
