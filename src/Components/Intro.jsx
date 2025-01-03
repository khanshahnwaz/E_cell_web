import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from "/assets/logo.png"

export default function () {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const headings = ['Innovation', 'Entrepreneurship', 'Incubation'];

  useEffect(() => {
    if (!isPaused) {
      const typingInterval = setInterval(() => {
        if (text.length < headings[index].length) {
          setText(headings[index].slice(0, text.length + 1));
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setText('');
            setIndex((prevIndex) => (prevIndex + 1) % headings.length);
          }, 1000);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [index, text, isPaused]);

  return (
    <div style={{ height: "100vh" }} className='flex justify-center flex-col items-center bg-zinc-800 relative'>
      <motion.div 
        className='w-full h-[50%] flex justify-center text-white font-semibold lg:text-[6rem] md:text-[5rem] text-[4rem] text-left drop-shadow-[0_0_100px_skyblue] absolute top-0'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: false, amount: 0.4 }}
      >
<img 
  src={logo} 
  alt="" 
  className="lg:w-[500px] md:w-[400px] sm:w-[350px] w-[290px] h-auto object-contain"
/>



      </motion.div>
      <p className='text-white text-lg md:text-2xl lg:text-3xl font-bold font-mono leading-tight absolute top-[60%] drop-shadow-[0_0_10px_black] '>
  {text}
</p>


    </div>
  )
}


