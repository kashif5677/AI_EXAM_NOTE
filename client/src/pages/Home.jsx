import React from 'react'
import Navbar from '../components/Navbar'
import { transform } from 'motion/react'
import { motion } from 'motion/react'

function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-white text-black'>
      <Navbar/>
      {/*top*/}
      <section
      className='max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
        <div>
          <motion.div
          initial={{opacity:0,x:-60}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.7}}
          whileHover={{rotateX:6,rotateY:-6}}
          style={{transformStyle:"preserve-3d"}}
          className='transform-gpu'
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent"
              whileHover={{y:-4}}
              style={{
                transform:"translateZ(30px)",
                textShadow:"0 18px 40px rgba(0,0,0,0.25)"
              }}
            >
              Create Smart <br />AI Notes in Seconds
            </motion.h1>
            <motion.p
              whileHover={{y:-2}}
              className='mt-6 max-w-xl text-lg 
              
              bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent'
               style={{
                transform:"translateZ(30px)",
                textShadow:"0 18px 40px rgba(0,0,0,0.25)"
              }}
            >
              Generate AI notes in seconds with our easy-to-use tool. Simply

            </motion.p>
                    <motion.button
                      whileHover={{
                        y: -10,
                        rotateX: 8,
                        rotateY: -8,
                        scale: 1.07
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                      className='mt-10 px-10 py-3 rounded-xl flex items-center gap-3 bg-gradient-to-br from-black/90 via-black/80 to-black/90 border border-white/10 text-white font-semibold text-lg shadow-[0_25px_60px_rgba(0,0,0,0.7)] disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                    Get started
                    </motion.button>

          </motion.div>
        </div>

        <motion.div
        initial={{opacity:0,x:60}}
        animate={{opacity:1,x:0}}
        transition={{}}
        whileHover={{
          y:-12,
        rotateX:8,
        rotateY:-8,
        scale:1.05
        }}
        className='transform-gpu'
        style={{transformStyle:"preserve-3d"}}
        >
          <div className='overflow-hidden'>
            <img src="" alt="img" 
              style={{transform:"translateZ(35px)"}}
            />
          </div>
        </motion.div>
      </section>
    
      {/* bottom */}
      <section></section>
    </div>
  )
}

export default Home
