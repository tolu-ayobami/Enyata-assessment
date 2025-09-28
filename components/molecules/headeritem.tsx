import React from 'react'
import Image from 'next/image'

type img = {
    src: string,
    alt:string
}

export const Headeritem = ({src, alt}: img ) => {
  return (
    <div>
        <div className=''>
        <Image src={src} alt={alt} width={25} height={25} className='cursor-pointer' />
        </div>

        </div>
  )
}
