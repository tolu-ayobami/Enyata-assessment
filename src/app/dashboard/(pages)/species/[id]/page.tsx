import React from 'react'
import Image from 'next/image';


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchData = async (id: string) => {
  const res = await fetch(`https://swapi.dev/api/species/${id}/`);
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();
  console.log("data:", data);
  return data;
};

console.log("baseUrl:", baseUrl);


interface PageProps {
  params: { id: string }
}

const Page = async ({ params }: PageProps) => {
  const { id } = params;
  const data = await fetchData(id);
  return (
    <div className='flex gap-[20px]  max-md:flex-col max-md:items-center'>
        <Image src="/images/species.png" alt={data.name} width={300} height={400}/>
        <div className='my-[50px]'>
          <h1 className="text-[38px] font-inter font-bold leading-[24px] mb-2">{data.name}</h1>
          <p className="text-[16px] font-inter text-[#434854]"><span>Designation:</span> {data.designation}</p>
           <p className="text-[16px] font-inter text-[#434854]"><span>Language:</span> {data.language}</p>
          <p className="text-[16px] font-inter text-[#434854]"><span>Eye Color:</span> {data.eye_color}</p>
          <p className="text-[16px] font-inter text-[#434854]"><span>Average LifeSpan:</span> {data.average_lifespan}</p>
         
        </div>
      </div>
  );
}

export default Page