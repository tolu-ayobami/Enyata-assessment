import { Film, CharacterResponse, StarshipResponse, SpeciesResponse,Character,Species,Starship } from "../interface/type";


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchFilms = async (): Promise<{ results: Film[] }> => {
  const response = await fetch(`${baseUrl}/films/`);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  console.log("films:", data);
 
  return {
    ...data,
    results: data.results.map((film: Film) => ({
      ...film,
      id: film.url.split("/").filter(Boolean).pop(), // ✅ stable id
    })),
  };
};

export const fetchPeople = async (): Promise<CharacterResponse> => {
  const response = await fetch(`${baseUrl}/people/`);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  console.log("people:", data);
 
  return {
    ...data,
    results: data.results.map((film: Character) => ({
      ...film,
      id: film.url.split("/").filter(Boolean).pop(), // ✅ stable id
    })),
  };
};

export const fetchStarships = async (): Promise<StarshipResponse> => { 
  const response = await fetch(`${baseUrl}/starships/`);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  console.log("starships:", data);
 
  return {
    ...data,
    results: data.results.map((film: Starship) => ({
      ...film,
      id: film.url.split("/").filter(Boolean).pop(), // ✅ stable id
    })),
  };
};

export const fetchSpecies = async (): Promise<SpeciesResponse> => {
  const response = await fetch(`${baseUrl}/species/`);
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  console.log("species:", data);
 
  return {
    ...data,
    results: data.results.map((film: Species) => ({
      ...film,
      id: film.url.split("/").filter(Boolean).pop(), // ✅ stable id
    })),
  };
};