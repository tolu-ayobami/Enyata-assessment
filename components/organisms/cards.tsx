import Image from 'next/image';
import React from 'react'

const Cards: React.FC<{ label: string; count: number; icon: string }> = ({ label, count, icon }) => {
    return (
       
            <div className="w-[208px] h-[130px] max-md:w-[90%] px-4 py-4 flex flex-col justify-between dark:bg-gray-900 shadow-lg bg-white rounded-lg dark:border dark:border-gray-700">
                <div className="flex justify-between items-center">
                    <p className="font-inter font-bold leading-[24px] text-[16px]">{label}</p>
                    <Image src={icon} alt={label} width={27} height={26} />
                </div>
               
                    <div className=''>
                        <h1 className='font-inter font-bold leading-[24px] text-[16px]'>{count}</h1>
                        <p className='text-[#00992B] text-[9px] font-inter font-normal dark:text-white'>20 More than than yesterday</p>
                    </div>
            
            </div>
  
    )
}

export default Cards;