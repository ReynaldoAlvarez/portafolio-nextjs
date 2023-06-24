
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation';
import {GithubIcon, LinkedInIcon, TwitterIcon} from './Icons';
import { motion } from 'framer-motion';
import {useThemeSwitcher} from './hooks/useThemeSwitcher';

type TCustomLink = {
  href:string;
  className:string;
  title:string
  toogle?:any;
}
  const CustomLink = ({href,className, title}:TCustomLink)=>{
    const pathname = usePathname();
   
  return <Link href={href} className={`${className} relative group`}>
    {title}
    <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-200 ${pathname === href ? 'w-full':'w-0'} `}>&nbsp;</span>
  </Link>

}

const CustomMobileLink = ({href,className, title, toogle}:TCustomLink)=>{
  const pathname = usePathname();

  const handleClick=()=>{
    pathname
  }
return (
<button  className={`${className} relative group  dark:text-light  my-2` } onClick={handleClick}>
  {title}
  <span className={`h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-200 ${pathname === href ? 'w-full':'w-0'} `}>&nbsp;</span>
</button>
)


}
const NavBar = () => {
  const [theme, toggleTheme ] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <header
    className=' w-full px-32 py-8 font-medium items-center justify-between flex text-dark relative z-0 lg:px-16 md:px-12 sm:px-8'>
      <button className='flex-col justify-start items-start hidden lg:left-0 md:left-0 bg-dark' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? ' rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0': 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ?'-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>

      </button>
     <div className='w-full flex justify-between items-center lg:hidden'>
     <nav>
        <CustomLink href="/" title='Home' className='mr-4' />
        <CustomLink href="/about" title='About' className='mx-4' />
        <CustomLink href="/projects" title='Projects' className='mx-4' />
        <CustomLink href="/articles" title='Articles' className='ml-4' />
      </nav>
      
      <nav className='flex item-center justify-center '>
        <motion.a href={'https://twitter.com'} target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale: 0.5}}
        className='w-6 mr-3'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a href={'https://github.com/ReynaldoAlvarez'} target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale: 0.5}}
        className='w-6 mr-3'
        >
          <GithubIcon /></motion.a>
        <motion.a href={'https://linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584'} target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale: 0.5}}
        className='w-6 mr-3'
        ><LinkedInIcon /></motion.a>
      </nav>
     </div>

     {isOpen ? 
     <motion.div 
     initial={{scale: 0, opacity: 0, x: "-50%", y:"50%"}}
     animate={{scale: 1, opacity: 1}}
     className=' min-w-[50vw] flex flex-col justify-between z-30 items-center fixed top-/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 text-light'>
     <nav className='flex flex-col justify-center items-center'>
        <CustomMobileLink href="/" title='Home' className='mr-4' toogle={handleClick}/>
        <CustomMobileLink href="/about" title='About' className='mx-4'toogle={handleClick} />
        <CustomMobileLink href="/projects" title='Projects' className='mx-4'toogle={handleClick} />
        <CustomMobileLink href="/articles" title='Articles' className='ml-4'toogle={handleClick} />
      </nav>
      
      <nav className='flex item-center justify-center '>
        <motion.a href={'https://twitter.com'} target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale: 0.5}}
        className='w-6 mr-3'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a href={'https://github.com/ReynaldoAlvarez'} target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale: 0.5}}
        className='w-6 mr-3'
        >
          <GithubIcon /></motion.a>
        <motion.a href={'https://linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584'} target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale: 0.5}}
        className='w-6 mr-3'
        ><LinkedInIcon /></motion.a>
      </nav>
     </motion.div>
     : null}
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
      <Logo />
      </div>
    </header>
  )
}

export default NavBar