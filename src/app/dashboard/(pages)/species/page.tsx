"use client"
import React from 'react'
import { Table } from '../../../../../components/organisms/table';
import { fetchSpecies } from '../../../../../libs/queriesfn';
import { useQuery } from '@tanstack/react-query';
import { speciescolumns } from '../../../../../utils/sidebar';
import Loading from '../../loading';
import { useRouter } from 'next/navigation';

const Page = () => {

 const { data: species, isLoading: speciesLoading } = useQuery({ queryKey: ["species"], queryFn: fetchSpecies });

   const router = useRouter();
   
  if (speciesLoading) return <Loading />
  return (
    <div className="mt-8 w-full">
      <div className="mb-4">
        <h1 className="font-inter text-[#A4A7B7] text-[16px] py-[5px]">Species</h1>
      </div>
      {species?.results?.length === 0 ? (
        <p>No species available.</p>
      ) : (
        <Table data={species?.results || []} columns={speciescolumns} onRowClick={(row) => router.push(`/dashboard/species/${row.id}`)} />
      )}
    </div>
  )
}

export default Page;