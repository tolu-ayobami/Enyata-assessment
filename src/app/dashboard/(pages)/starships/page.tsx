"use client"
import React from 'react'
import { Table } from '../../../../../components/organisms/table';
import { fetchStarships } from '../../../../../libs/queriesfn';
import { useQuery } from '@tanstack/react-query';
import { starshipcolumns } from '../../../../../utils/sidebar';
import Loading from '../../loading';
import { useRouter } from 'next/navigation';

const Page = () => {

 const { data: starships, isLoading: starshipsLoading } = useQuery({ queryKey: ["starships"], queryFn: fetchStarships });
 
  if (starshipsLoading) return <Loading />

  const router = useRouter();

const formattedData = starships?.results?.map((p) => ({
  id: p.id,
  name: p.name,
  model: p.model,
  starship_class: p.starship_class,
  length: p.length,
  passengers: p.passengers,
  films: p.films[0] // 👈 convert array → string
}));

  return (
    <div className="mt-8 w-full">

      <div className="mb-4">
        <h1 className="font-inter text-[#A4A7B7] text-[16px] py-[5px]">Starships</h1>
      </div>

      {starships?.results?.length === 0 ? (
        <p>No starships available.</p>
      ) : (
        <Table data={formattedData || []} columns={starshipcolumns} onRowClick={(row) => router.push(`/dashboard//starships/${row.id}`)} />
      )}
    </div>
  )
}

export default Page;