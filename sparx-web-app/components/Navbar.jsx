import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router';
import Logo from '../public/assets/sparxLogo.png'
import {AiFillHome} from 'react-icons/ai'
import {MdLeaderboard} from 'react-icons/md'
import {AiFillSchedule} from 'react-icons/ai'
import {IoMdPhotos} from 'react-icons/io'
import {AiFillTrophy} from 'react-icons/ai'
import {SlBookOpen} from 'react-icons/sl'
function Navbar() {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState('#030303');
  const [linkColor, setLinkColor] = useState('#9D9D9E');

  const handleNav = () => {
    setNav(!nav);
  }

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
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
    <div className={shadow ? ('fixed backdrop-blur-sm bg-[#030303]/90 w-full h-20 z-[100]') : ('fixed bg-[#030303] w-full h-20 z-[100]')}>
      <div className='flex justify-between items-center w-full h-full  px-4 2xl:px-16'>
        <Image src={Logo} alt="/" width='75' height='50' />
        <div>
          <ul className='hidden md:flex  text-[#9D9D9E]'>
            <Link href='/'>
              <li onClick={() => setNav(false)} className={`ml-8 ${router.asPath === '/' ? 'text-yellow-400': ""} text-md font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150`}>Home</li>
            </Link>
            <Link href="/points">
              <li className={`ml-8 ${router.asPath === '/points'? 'text-yellow-400': ""} text-md font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150`}>Points-Table</li>
            </Link>

            <Link href="/schedule">
              <li className={`ml-8 ${router.asPath === '/schedule'? 'text-yellow-400': ""} text-md font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150`}>Schedule</li>
            </Link>
            <Link href="/photos">
              <li className={`ml-8 ${router.asPath === '/photos'? 'text-yellow-400': ""} text-md font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150`}>Gallery</li>
            </Link>
            <Link href="/winners">
              <li className={`ml-8 ${router.asPath === '/winners'? 'text-yellow-400': ""} text-md font-medium uppercase hover:text-[#9D9D9E]  ease-in duration-150`}>Winners</li>
            </Link>


          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>

            <AiOutlineMenu size={25} className="hover:text-blue-400 ease-in duration-200" />
          </div>




        </div>



      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 h-full w-full bg-black/70' : ''}>
        <div className={nav ? 'fixed  right-0 top-0 bg-[#BB2649] bg-gradient-to-b from-[#d82b54] to-[#BB2649] px-4 py-0 h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-200' :
          'fixed  right-[-100%] top-0 bg-[#bb2649]  px-4 py-0  h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-200'}>
          <div className=' flex flex-col w-full h-full justify-between'>
            <div className=''>
              <div className='flex items-center justify-between'>
                <Image src={Logo} alt="/" width='75' height='50' />
                <div onClick={handleNav} className='p-3 rounded-full shadow-sm hover:shadow-md shadow-[#030303] cursor-pointer text-white  hover:shadow-[#030303]'>
                  <AiOutlineClose />
                </div>

              </div>
              <div className=' border-b-2 border-gray-300 p-1 text-[#f5f5f5]'>
                <p className='py-3 w-[85%] md:w-[90%] text-xl md:text-3xl text-yellow-400 font-bold font-sans'>Worth the Hype</p>
              </div>



            </div>
            <div className='h-full  flex flex-col justify-center'>
              <ul className='uppercase text-white flex flex-col justify-between gap-6' >
                <Link href='/'>
                  <li onClick={() => setNav(false)} className={`ml-4 ${router.asPath === '/' ? "text-yellow-400":""} hover:bg-[#b12647] p-2 rounded-md text-md font-light tracking-widest md:text-lg uppercase hover:text-[#000000]/50 hover:ml-12  ease-in duration-150`}><div className=' flex items-center justify-start'><AiFillHome className=' mr-2'/>Home</div></li>
                </Link>
                <Link href='/points'>
                  <li onClick={() => setNav(false)} className={`ml-4 ${router.asPath === '/points' ? "text-yellow-400":""} hover:bg-[#b12647] p-2 rounded-md text-md font-light tracking-widest md:text-lg uppercase hover:text-[#000000]/50 hover:ml-12  ease-in duration-150`}><div className=' flex items-center justify-start'><MdLeaderboard className=' mr-2'/>Points-Table</div></li>
                </Link>
                <Link href='/schedule'>
                  <li onClick={() => setNav(false)} className={`ml-4 ${router.asPath === '/schedule' ? "text-yellow-400":""} hover:bg-[#b12647] p-2 rounded-md text-md font-light tracking-widest md:text-lg uppercase hover:text-[#000000]/50 hover:ml-12  ease-in duration-150`} ><div className=' flex items-center justify-start'><AiFillSchedule className=' mr-2'/>Schedule</div></li>
                </Link>
                <Link href='/photos'>
                  <li onClick={() => setNav(false)} className={`ml-4 ${router.asPath === '/photos' ? "text-yellow-400":""} hover:bg-[#b12647] p-2 rounded-md text-md font-light tracking-widest md:text-lg uppercase hover:text-[#000000]/50 hover:ml-12  ease-in duration-150`}><div className=' flex items-center justify-start'><IoMdPhotos className=' mr-2'/>Gallery</div></li>
                </Link>
                <Link href='/winners'>
                  <li onClick={() => setNav(false)} className={`ml-4 ${router.asPath === '/winners' ? "text-yellow-400":""} hover:bg-[#b12647] p-2 rounded-md text-md font-light tracking-widest md:text-lg uppercase hover:text-[#000000]/50 hover:ml-12  ease-in duration-150`}><div className=' flex items-center justify-start'><AiFillTrophy className=' mr-2'/>Winners</div></li>
                </Link>


              </ul>

            </div>
            <div className='flex flex-col gap-2 bottom-10 my-4 pb-12'>
              <p className='uppercase pl-2 tracking-widest text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Let's Connect</p>
              <div>
                <div className='flex justify-start gap-5 items-center w-full  sm:w-[85%]'>
                  <Link href="https://instagram.com/sparx.2023?igshid=YmMyMTA2M2Y=">
                  <div className='rounded-full bg-white text-black p-4 cursor-pointer ease-in duration-300'>
                    <FaInstagram size={20} className="hover:scale-150 transition-all ease-in duration-150" />
                  </div>
                  </Link>
                  
                  <div className='rounded-full bg-white text-black p-4 cursor-pointer ease-in duration-300'>
                    <SlBookOpen size={20} className="hover:scale-150 transition-all ease-in duration-150" />
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