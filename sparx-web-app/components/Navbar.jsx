import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router';
import Logo from '../public/assets/navLogo.png'
function Navbar() {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState('#030303');
  const [linkColor, setLinkColor] = useState('#9D9D9E');

  const handleNav = () => {
    setNav(!nav);
  }

  useEffect(()=>{
    if(nav){
      document.body.style.overflow = 'hidden';
    }
    return()=>{
      document.body.style.overflow = 'unset';
    }

  }, [nav])

  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 10) {
        setShadow(true)
      } else {
        setShadow(false);
      }





    }
    window.addEventListener('scroll', handleShadow)
    //console.log("ShadowEffect")

    return () => {
      window.removeEventListener('scroll', handleShadow)
      //console.log("Removed")
    }

  }, [])

  const router = useRouter();
  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/twitch' ||
      router.asPath === '/netflix'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('white')
      setLinkColor('#1f2937')
    }
  }, [router])




  return (
    <div className={shadow ? ('fixed backdrop-blur-sm s  bg-[#030303]/90 w-full h-20 z-[100]') : ('fixed bg-[#030303] w-full h-20 z-[100]')}>
      <div className='flex justify-between items-center w-full h-full  px-4 2xl:px-16'>
        <Image src={Logo} alt="/" width='75' height='50' />
        <div>
          <ul className='hidden md:flex  text-[#9D9D9E]'>
            <Link href="/home">
              <li className='ml-8 text-md font-medium uppercase hover:text-white ease-in duration-150'>Home</li>
            </Link>

            <Link href="/#schedule">
              <li className='ml-8 text-md font-medium uppercase hover:text-white ease-in duration-150'>Schedule</li>
            </Link>
            <Link href="/photos">
              <li className='ml-8 text-md font-medium uppercase hover:text-white ease-in duration-150'>Gallery</li>
            </Link>
            <Link href="/#winners">
              <li className='ml-8 text-md font-medium uppercase hover:text-white ease-in duration-150'>Winners</li>
            </Link>
            <Link href="/#contact">
              <li className='ml-8 text-md font-medium uppercase hover:text-white ease-in duration-150'>Contact</li>
            </Link>

          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>

            <AiOutlineMenu size={25} className="hover:text-blue-400 ease-in duration-200" />
          </div>




        </div>



      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 h-full w-full bg-black/70' : ''}>
        <div className={nav ? 'fixed  right-0 top-0 bg-[#fe0109] px-4 py-4 h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-200' :
          'fixed  right-[-100%] top-0 bg-[#fe0109] p-10 h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-200'}>
          <div className=' flex flex-col w-full h-full justify-between'>
            <div className=''>
              <div className='flex items-center justify-between'>
                <Image src={Logo} alt="/" width='75' height='50' />
                <div onClick={handleNav} className='p-3 rounded-full shadow-sm hover:shadow-md shadow-[#030303] cursor-pointer text-white  hover:shadow-[#030303]'>
                  <AiOutlineClose />
                </div>

              </div>
              <div className=' border-b-2 border-gray-300 p-1 text-[#f5f5f5]'>
                <p className='py-3 w-[85%] md:w-[90%] '>Worth the Hype</p>
              </div>



            </div>
            <div className='h-full  flex flex-col justify-center'>
              <ul className='uppercase text-white flex flex-col justify-between gap-9' >
                <Link href='/home'>
                  <li onClick={() => setNav(false)} className='ml-8 text-md font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150'>Home</li>
                </Link>
                <Link href='/#schedule'>
                  <li onClick={() => setNav(false)} className='ml-8 text-md font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150' >Schedule</li>
                </Link>
                <Link href='/photos'>
                  <li onClick={() => setNav(false)} className='ml-8 text-md font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150'>Gallery</li>
                </Link>
                <Link href='/#winners'>
                  <li onClick={() => setNav(false)} className='ml-8 text-md font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150'>Winners</li>
                </Link>
                <Link href='/#contact'>
                  <li onClick={() => setNav(false)} className='ml-8 text-md font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150'>Contact</li>
                </Link>

              </ul>

            </div>
            <div className='flex flex-col gap-2 bottom-10'>
              <p className='uppercase pl-2 tracking-widest text-white'>Let's Connect</p>
              <div>
                <div className='flex justify-start gap-5 items-center w-full  sm:w-[85%]'>

                  <div className='rounded-full bg-white text-black p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaInstagram size={25} />
                  </div>
                  <div className='rounded-full bg-white text-black p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill size={25}/>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Navbar