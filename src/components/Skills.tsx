import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
type SkillProp={
  name:string;
  x:string;
  y:string;
  classname?:string;
}
const Skill = ({name, x, y, classname}:SkillProp)=>{
  return(
    <motion.div className={`flex items-center justify-center rounded-full font-semibold ${classname ? classname : 'bg-dark' } ${classname ? 'text-dark' : 'text-white' } py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-5 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold`}
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
  
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Techincal Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularlight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
        whileHover={{scale:1.05}}
        >
          Software <br/>Engineer
        </motion.div>
        <Skill name='Dart' x='-20vw' y='6vw' classname=' bg-blue-400' />
        <Skill name='Flutter' x='-20vw' y='10vw'classname=' bg-blue-400' />
        <Skill name='C++' x='-12vw' y='6vw' classname=' bg-blue-400'/>
        <Skill name='Swift' x='-12vw' y='10vw' classname=' bg-blue-400'/>
        <Skill name='FRONTEND' x='-25vw' y='0vw' />
        <Skill name='JS' x='-20vw' y='-6vw' classname=' bg-indigo-300' />
        <Skill name='Handlebars' x='-20vw' y='-10vw'classname=' bg-indigo-300' />
        <Skill name='ReactJs' x='-20vw' y='-15vw '  classname=' bg-indigo-300' />
        <Skill name='NextJs' x='-20vw' y='-20vw 'classname=' bg-indigo-300' />
        <Skill name='css' x='-10vw' y='-6vw' classname=' bg-indigo-300' />
        <Skill name='Bootstrap' x='-10vw' y='-10vw' classname=' bg-indigo-300' />
        <Skill name='TilwindCss' x='-10vw' y='-15vw' classname=' bg-indigo-300' />

        <Skill name='BACKEND' x='25vw' y='-0vw' />
        <Skill name='Go' x='30vw' y='-6vw ' classname=' bg-gray-300' />
        <Skill name='NodeJs' x='20vw' y='-6vw' classname=' bg-gray-300' />
        <Skill name='Express' x='20vw' y='-10vw' classname=' bg-gray-300'/>
        <Skill name='Typescript' x='20vw' y='-15vw' classname=' bg-gray-300'/>
        <Skill name='PostegreSql' x='10vw' y='-6vw' classname=' bg-gray-300'/>
        <Skill name='MySql' x='10vw' y='-10vw' classname=' bg-gray-300'/>
        <Skill name='MongoDb' x='10vw' y='-15vw' classname=' bg-gray-300'/>
        <Skill name='Redis' x='10vw' y='-20vw' classname=' bg-gray-300'/>
        <Skill name='Azure' x='30vw' y='6vw' classname=' bg-slate-400' />
        <Skill name='AWS' x='20vw' y='6vw' classname=' bg-slate-400' />
        <Skill name='Pipeline' x='20vw' y='10vw' classname=' bg-slate-400' />
        <Skill name='Virtual C2' x='20vw' y='15vw' classname=' bg-slate-400'/>
        <Skill name='Digital Ocean' x='10vw' y='6vw' classname=' bg-slate-400'/>
        <Skill name='c2' x='10vw' y='10vw' classname=' bg-slate-400'/>
        <Skill name='Pipeline' x='10vw' y='15vw' classname=' bg-slate-400'/>
        <Skill name='Redis' x='10vw' y='20vw' classname=' bg-slate-400'/>
      </div>

      
      
    </>
  )
}

export default Skills