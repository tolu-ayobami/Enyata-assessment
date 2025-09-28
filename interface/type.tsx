export type input = {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  className?: string;
  fieldsetClassName?: string;
  passwordClassName?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export type nav = {
  label: string,
  href: string,
  icon: string,
  isOpen:boolean,
  setIsOpen: (isOpen:boolean) => void
};

export type navs = {
  label: string,
  href: string,
  icon: string,
};


export interface Film {
  characters: string[]; // array of character URLs
  created: string; // ISO date string
  director: string;
  edited: string; // ISO date string
  episode_id: number;
  opening_crawl: string;
  planets: string[]; // array of planet URLs
  producer: string;
  release_date: string; // YYYY-MM-DD
  species: string[]; // array of species URLs
  starships: string[]; // array of starship URLs
  title: string;
  url: string;
  id:string;
  vehicles: string[]; // array of vehicle URLs
}


export interface Character {
  name: string;
  birth_year: string;
  created: string; // ISO date string
  edited: string;  // ISO date string
  eye_color: string;
  films: string[]; // array of film URLs
  gender: string;
  hair_color: string;
  height: string; // comes as string (e.g. "172")
  homeworld: string; // planet URL
  mass: string; // string in API (sometimes "unknown")
  skin_color: string;
  species: string[]; // array of species URLs
  starships: string[]; // array of starship URLs
  url: string;
  id?: string;
  vehicles: string[]; // array of vehicle URLs
}




export interface CharacterResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}



interface film {
  films:string

}


export interface Starship {
  MGLT: string; // Megalight per hour (speed)
  cargo_capacity: string; // string because SWAPI sometimes uses "unknown"
  consumables: string; // e.g. "1 year"
  cost_in_credits: string; // also string ("unknown" possible)
  created: string; // ISO date string
  crew: string; // string because it can be "30-165"
  edited: string; // ISO date string
  films: film[]; // array of film URLs
  hyperdrive_rating: string;
  length: string; // string, not number
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string; // string ("600" or "n/a")
  pilots: string[]; // array of people URLs
  starship_class: string;
  url: string;
  id?: string;
}


export interface StarshipResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}



export interface Species {
  average_height: string; // string because API may return "unknown"
  average_lifespan: string; // also string ("120" or "indefinite")
  classification: string;
  created: string; // ISO date string
  designation: string;
  edited: string; // ISO date string
  eye_colors: string; // comma-separated list
  films: string[]; // array of film URLs
  hair_colors: string; // comma-separated list
  homeworld: string | null; // sometimes null
  language: string;
  name: string;
  people: string[]; // array of character URLs
  skin_colors: string; // comma-separated list
  url: string;
  id?: string;
}


export interface SpeciesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Species[];
}



