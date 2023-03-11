import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { AdminsList } from '../src/admins.js'
const Admins = () => {
  /*const containerRef = useRef(null)
  useEffect(() => {
      const container = containerRef.current;
      let scrollInterval;
  
      function startScrolling() {
        scrollInterval = setInterval(() => {
          if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
              container.scrollLeft = 0;
            }
          container.scrollLeft += 0.5;
        }, 25);
      }
  
      function stopScrolling() {
        clearInterval(scrollInterval);
      }
  
      container.addEventListener('mouseenter', stopScrolling);
      container.addEventListener('mouseleave', startScrolling);
  
      startScrolling();
  
      return () => {
        container.removeEventListener('mouseenter', stopScrolling);
        container.removeEventListener('mouseleave', startScrolling);
        clearInterval(scrollInterval);
      };
    }, []);*/
  return (
    <>
      {
        AdminsList.map((admin) => {
          return (
            <>
              <div className='flex flex-col gap-2 justify-between p-2 items-center w-full'>

                <Image className='  border-4 border-gray-700/50  object-cover mx-4  w-[10rem] h-[10rem] object-top bg-center rounded-full' src={admin.imgSrc} alt="/" width={150} height={150} />
                <div>
                  <p className=' text-[#e6c098] font-semibold '>{admin.name}</p>
                </div>
                </div>
              </>
              )
        })
      }


            </>
          )
        }

export default Admins