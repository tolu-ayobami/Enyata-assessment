"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { Headeritem } from '../molecules/headeritem';
import { HiBars3BottomRight, HiSun, HiMoon } from "react-icons/hi2";
import { useRouter } from 'next/navigation';



interface DashboardHeaderProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
const Header = ({ isOpen, setIsOpen }: DashboardHeaderProps) => {

    const data = [
        {
            src: "/icons/shape.svg",
            alt: "notifiication"
        },
        {
            src: "/icons/Rectangle Copy 2.svg",
            alt: "vertical"
        },
        {
            src: "/icons/account.svg",
            alt: "account"
        }
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const [log, setLog] = useState(false)

    const router = useRouter()


    return (
        <>
        <div className='relative'>
        <div className='bg-white dark:bg-gray-900 z-50 shadow-lg w-full h-[64px] flex justify-between items-center justify-center dark:border dark:border-gray-700'>
                <div className="lg:hidden px-5 cursor-pointer">

                    <HiBars3BottomRight className='text-[20px] ' onClick={toggleMenu} />

                </div>

                <div className=''>

                </div>

                <div className='flex items-center gap-[20px] sm:gap-[50px] pr-5 sm:pr-12  '>
                    <div className='cursor-pointer' onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <HiSun className='text-[20px]' /> : <HiMoon className='text-[20px]' />}
                    </div>
                    <div className='flex items-center gap-[20px] '>
                        {data.map((map, index) => (
                            <div key={index} className={` ${index === 1 ? "w-[1px]" : ""} ${index === 0 ? "w-[20px]" : ""} `}>
                                <Headeritem key={index} {...map} />
                            </div>
                        ))}
                        <p className='text-[15px] font-karla'>John Doe</p>
                    </div>
                    <Image src="/icons/dots.svg" alt='dots' width={20} height={20} className='cursor-pointer ' onClick={() => setLog(!log)} />

                </div>

            </div>

            {log && <div className='bg-white dark:bg-gray-900 dark:border dark:border-gray-700 absolute right-0 shadow-lg w-[200px] flex justify-center rounded p-[20px]'>
                <button className='w-[80%] cursor-pointer bg-[#0A74DC] text-center m-[auto] text-white dark:text-white rounded' onClick={() => router.push("/")}>Logout</button>
            </div>}

            </div>

        </>
    )
}

export default Header;