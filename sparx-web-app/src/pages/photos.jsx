import React, { useEffect, useState } from 'react'
import Images from 'components/Images.jsx'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'


const photos = () => {
    const [modal, setModal] = useState(false)
    const [tempSrc, setTempSrc] = useState('')




    const getImg = (imgSrc) => {
        setTempSrc(imgSrc)
        setModal(true)

    }
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }

    }, [modal])


    return (
        <>
            <div className=' relative top-20 flex flex-col justify-center items-center'>
                <div className=' max-w-[1240px] w-full'>
                    <div className=' flex flex-col justify-center items-center'>
                        <h2 className='text-white'>
                            Gallery
                        </h2>
                        <div className=' py-5 lg:py-8 w-full p-2 lg:p-0 flex justify-center items-center flex-col'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                <Images getImg={getImg} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={modal ? 'fixed p-4 top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black/70 backdrop-blur-sm overflow-hidden z-[200]' : "hidden"}>
                <div className=' absolute top-2 right-2 cursor-pointer bg-white/20 hover:bg-white/70 p-2 rounded-full' onClick={() => setModal(false)}>
                    <AiOutlineClose size={20} />
                </div>
                <div className=' relative'>
                    <Image className=' object-fill object-center' src={tempSrc} alt="/" width={500} height={300} layout="responsive" />
                </div>

            </div>
        </>
    )
}

export default photos