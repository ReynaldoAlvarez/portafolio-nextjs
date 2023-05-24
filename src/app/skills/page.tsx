import { motion } from 'framer-motion'
import React from 'react'
type SkillProp={
  name:string;
  x:string;
  y:string;
}
const Skill = ({name, x, y}:SkillProp)=>{
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5}}
        >
         {name}
        </motion.div>
  )
}
const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularlight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
        whileHover={{scale:1.05}}
        >
          Software <br/>Engineer
        </motion.div>
        <Skill name='Js' x='-25vw' y='2vw' />
        <Skill name='ReactJs' x='-5vw' y='10vw' />
        <Skill name='NextJs' x='-20vw' y='6vw' />
        <Skill name='TilwindCss' x='-0vw' y='12vw' />
        <Skill name='Python' x='20vw' y='15vw' />
        <Skill name='Flutter' x='15vw' y='-12vw' />
        <Skill name='Dart' x='32vw' y='-5vw' />
        <Skill name='Back' x='0vw' y='-20vw' />
        <Skill name='Front' x='-25vw' y='18vw' />
        <Skill name='Aws' x='18vw' y='18vw' />
      </div>
    </>
  )
}

export default Skills