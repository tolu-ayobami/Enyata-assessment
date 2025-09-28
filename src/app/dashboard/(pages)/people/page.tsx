"use client"
import React from 'react'
import { Table } from '../../../../../components/organisms/table';
import { fetchPeople } from '../../../../../libs/queriesfn';
import { useQuery } from '@tanstack/react-query';
import { peoplecolumns } from '../../../../../utils/sidebar';
import Loading from '../../loading';
import { useRouter } from 'next/navigation';

const Page = () => {


  const { data: people, isLoading: peopleLoading } = useQuery({ queryKey: ["people"], queryFn: fetchPeople })

  const router = useRouter();

  if (peopleLoading) return <Loading />
  return (
    <div className="mt-8 w-full">
      <div className="mb-4">
        <h1 className="font-inter text-[#A4A7B7] text-[16px] py-[5px]">People</h1>
      </div>
      {people?.results?.length === 0 ? (
        <p>No people available.</p>
      ) : (
        <Table data={people?.results || []} columns={peoplecolumns} onRowClick={(row) => router.push(`/dashboard/people/${row.id}`)} />
      )}
    </div>
  )
}

export default Page;