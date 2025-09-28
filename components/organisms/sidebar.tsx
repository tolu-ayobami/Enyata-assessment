import React from 'react'
import Image from 'next/image';
import { sidebardata } from '../../utils/sidebar'
import { SidebarItem } from '../molecules/sidebaritem';
import { FaTimes } from "react-icons/fa";


interface DashboardHeaderProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: DashboardHeaderProps) => {
    return (
        <>
            {/* Overlay backdrop */}
            {isOpen && window.innerWidth < 1024 && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/20 backdrop-blur-md z-40 lg:hidden"
                />
            )}

            <div>
                <div className={`fixed top-0 left-0 h-screen pt-9 dark:bg-gray-900 dark:text-white dark:border-r dark:border-gray-700 transition-transform w-[264px] z-50 bg-[#031434] text-[#FFFFFF] shadow-md ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:block`}>
                    <div className="flex flex-col  overflow-y-auto hide-scrollbar ">
                        <div className='flex'>
                            <div className='pb-7 m-[auto]'>
                                <Image src="/icons/image 2.svg" alt="logo" width={107} height={46} />
                            </div>
                            {isOpen && <div onClick={() => setIsOpen(false)} className='bg-[#031434] dark:bg-gray-900 absolute flex items-center cursor-pointer justify-end right-[-18px] p-[5px] mt-[40px] w-[20px] h-[20px] '>
                           <FaTimes className='text-white'/>
                            </div>}
                        </div>


                        <div className='px-4 flex flex-col gap-[18px]'>
                            {sidebardata.map((map, index) => (
                                <div key={index} className={index === 0 ? "mb-8" : ""}>
                                    <SidebarItem {...map} isOpen={isOpen} setIsOpen={setIsOpen} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;