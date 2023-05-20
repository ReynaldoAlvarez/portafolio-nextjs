
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter, usePathname } from 'next/navigation';
type TCustomLink = {
  href:string;
  className:string;
  title:string
}
  const CustomLink = ({href,className, title}:TCustomLink)=>{
    const pathname = usePathname();
   
  return <Link href={href} className={`${className} relative group`}>
    {title}
    <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-200 ${pathname === href ? 'w-full':'w-0'} `}>&nbsp;</span>
  </Link>

}
const NavBar = () => {
  return (
    <header
    className='bg-gray-400 w-full px-32 py-8 font-medium items-center justify-between flex'>
      <nav>
        <CustomLink href="/" title='Home' className='mr-4' />
        <CustomLink href="/about" title='About' className='mx-4' />
        <CustomLink href="/projects" title='Projects' className='mx-4' />
        <CustomLink href="/articles" title='Articles' className='ml-4' />
      </nav>
      
      <nav>
        <Link href={'/'} target={'_blank'}>T</Link>
        <Link href={'/'} target={'_blank'}>T</Link>
        <Link href={'/'} target={'_blank'}>T</Link>
        <Link href={'/'} target={'_blank'}>T</Link>

      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
      <Logo />
      </div>
    </header>
  )
}

export default NavBar