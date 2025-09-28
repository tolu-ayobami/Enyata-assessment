"use client"
import React, { useState } from 'react';
import Sidebar from '../../../components/organisms/sidebar';
import Header from '../../../components/organisms/header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex  h-screen">
      {/* Sidebar  */}

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-1 overflow-hidden w-full">
        {/* header  */}
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="flex-1 overflow-y-auto pt-[45px] px-6 pb-4">
            {children}
        </main>
      </div>
    </div>
  );
}
