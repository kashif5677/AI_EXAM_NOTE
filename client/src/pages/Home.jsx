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

          </motion.div>
        </div>
        <div></div>
      </section>
    
      {/*bottom*/}
      <section></section>
    </div>
  )
}

export default Home
