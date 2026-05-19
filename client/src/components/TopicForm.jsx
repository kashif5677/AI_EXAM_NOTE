import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

function TopicForm() {
    const [topic,setTopic]=useState("");
    const [classlevel,setClassLevel]=useState("");
    const [examType,setExamType]=useState("");
    const [revisionMode,setRevisionMode]=useState(false);
    const [includeDiagram,setIncludeDiagram]=useState(false);
    const [includeChart,setIncludeChart]=useState(false);
    
  return (
    <motion.div
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    className='
        rounded-2xl
        bg-gradient-to-br from-black/90 via-black/80 to-black/90
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_30px_80px_rbga(0,0,0,0.7)]
        p-8
        space-y-6
        text-white
    '>
        <input type="text"
            className='w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg
                border border-white/20  placeholder-gray-400 text-white 
                focus:outline-none focus:ring-2 focus:ring-white/30
            '
            placeholder='Enter topic (e.g. web Development)'
            onChange={(e)=>setTopic(e.target.value)}
            value={topic}
        />
        <input type="text"
            className='w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg
                border border-white/20  placeholder-gray-400 text-white 
                focus:outline-none focus:ring-2 focus:ring-white/30
            '
            placeholder='Class/Level (e.g. class 10)'
            onChange={(e)=>setClassLevel(e.target.value)}
            value={classlevel}
        />
        <input type="text"
            className='w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg
                border border-white/20 placeholder-gray-400 text-white 
                focus:outline-none focus:ring-2 focus:ring-white/30
            '
            placeholder='EXam Type(JEE,NET,UPSC)'
            onChange={(e)=>setExamType(e.target.value)}
            value={examType}
        />
    </motion.div>
  )
}


function Toggle({label,checked,onChange}){
    return(
        <div className='flex items-center gap-4 cursor-pointer select-none'
            onChange={onChange}
        >
            <motion.div
            animate={{
                backgroundColor:checked
                ? "rgba(34,197,94,0.35)"  //green when ON
                : "rgba(255,255,255,0.15)" //red when OFF
            }}
            transition={{duration:0.25}}
            className='relative w-12 h-6 rounded-full
                border border-white/20
                backdrop-blur-lg
            '
            >
                <motion.div 
                    layout
                    transition={{type:"spring",stiffness:500,damping:30}}
                    className='absolute top-0.5
                        h-5 w-5 rounded-full
                        bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]
                    '
                    style={{
                        left:checked
                        ? "1.6rem"
                        : "0.25rem"
                    }}
                >
                    <span className={`text-sm transition-colors ${checked ? "text-green-300" : "text-gary-300"}`}>{label}</span>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default TopicForm
