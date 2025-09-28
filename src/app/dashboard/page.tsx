"use client";
import { useQuery } from "@tanstack/react-query";
import Cards from "../../../components/organisms/cards";
import { fetchFilms, fetchPeople, fetchSpecies, fetchStarships } from '../../../libs/queriesfn';
import Loading from "./loading";
import { Film } from "../../../interface/type";
import { Table } from "../../../components/organisms/table";
import { filmscolumns } from "../../../utils/sidebar";
import { useRouter } from "next/navigation";


const Page = () => {
  const router = useRouter();
  const { data: films, isLoading: filmsLoading } = useQuery({ queryKey: ["films"], queryFn: fetchFilms });
  const { data: people, isLoading: peopleLoading } = useQuery({ queryKey: ["people"], queryFn: fetchPeople });
  const { data: species, isLoading: speciesLoading } = useQuery({ queryKey: ["species"], queryFn: fetchSpecies });
  const { data: starships, isLoading: starshipsLoading } = useQuery({ queryKey: ["starships"], queryFn: fetchStarships });

  if (filmsLoading || peopleLoading || speciesLoading || starshipsLoading) return <Loading />;


  
const formattedData = films?.results?.map((p) => ({
  id: p.id,
  title: p.title,
  release_date: p.release_date,
  director: p.director,
  producer: p.producer,
  episode_id: p.episode_id,
  characters: p.characters[0] // 👈 convert array → string
}));


  return (
    <>
    <div className="">
    <div className="flex flex-col md:flex-row max-md:m-[auto] items-center justify-between z-0 w-[90%]  gap-4">
      <Cards label="Films" count={films?.results?.length || 0} icon="/icons/film.svg" />
      <Cards label="Starships" count={starships?.results?.length || 0} icon="/icons/starships.svg" />
      <Cards label="People" count={people?.results?.length || 0} icon="/icons/people.svg" />
      <Cards label="Species" count={species?.results?.length || 0} icon="/icons/species.svg" />
    </div>
    <h1 className="font-inter text-[#A4A7B7] text-[16px] py-[10px] mt-[50px]">Films</h1>

    <div className="mt-8 w-full">
      {films?.results?.length === 0 ? (
        <p>No films available.</p>
      ) : (
        <Table data={formattedData || []} columns={filmscolumns} onRowClick={(row) => router.push(`/dashboard/${row.id}`)} />
      )}
    </div>
    </div>
  </>
  );
};

export default Page;