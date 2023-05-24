import { useScroll, motion } from 'framer-motion';
import React, { useRef } from 'react'
import LiIcons from './LiIcons';
type TDetail =
{position:string;
   company:string;
   companyLink:string;
   time:string;
   address:string;
   description:string;}

const Details = ({position, company, companyLink, time, address, description}:TDetail)=>{
   const ref:any = useRef();
  return(
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col it,ems-center justify-between'>
      <LiIcons reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;<a href={companyLink} target={'_blank'} className='capitalize text-primary'>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}

        </span>
        <p className='font-medium w-full'>
          {description}
        </p>  
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress}= useScroll({
    target: ref,
    offset: ["start end","center start"]
  })
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-10 w-[4px] h-full bg-dark origin-top'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details position="Software Engineer" company='Geopois' companyLink='https://www.geopois.com' time='2.5 year' address='Madrid, Spain' description='Ingeniero A Cargo Del Desarrollo hasta su despliegue del Sistema de informacion Geografica De La Empresa - Div.Industria y Costruccion.' />
          <Details position="Software Developer" company='BunkerDev' companyLink='https://www.bunkerdev.com' time='3 year year' address='Indonesia' description='Ingeniero A Cargo Del Desarrollo hasta su despliegue del Sistema de informacion Geografica De La Empresa - Div.Industria y Costruccion.' />

          <Details position="Geographic Information Sistem Engineer" company='Hansa' companyLink='https://hansa.com.bo' time='2.5 year' address='La Paz, Bo' description='Ingeniero A Cargo Del Desarrollo hasta su despliegue del Sistema de informacion Geografica De La Empresa - Div.Industria y Costruccion.' />


        </ul>
      </div>
    </div>
  )
}

export default Experience