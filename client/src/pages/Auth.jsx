import React from 'react'
import {motion} from 'framer-motion'

function Auth() {
  return (
    <div className='min-h-screen overflow-hidden bg-white text-black px-8 '>
      <motion.header
      initial={{y:-15,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}

      className='max-w-6xl mx-auto mt-8 
      rounded-2xl bg-black/80 backdrop-blur-xl 
      border border-white/10
      px-8 py-6
      shadow-[0_20px_45px_rgba(0,0,0,0.6)]
      '>
        <h1 className='text-2xl font-bold bg-linear-to-r from-white via-gray-400 to-white bg-clip-text text-transparent'>
            ExamNotes AI
        </h1>
        <p className='text-sm text-gray-400 mt-1'>
            AI-powered exam-oriented nots & revision
        </p>

      </motion.header>
      <main className='max-w-6xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-20 '>

        {/* left */}

        {/* Right */}
        

      </main>
    </div>
  )
}

export default Auth
