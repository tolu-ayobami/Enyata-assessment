import { navs, Film } from "../interface/type";

export const sidebardata: navs [] = [

     {
        label:"Overview",
        href: "/dashboard",
        icon: "/icons/overview.svg",

    },

    
     {
        label:"Starships",
        href: "/dashboard/starships",
        icon: "/icons/starships.svg",

    },


     {
        label:"People",
        href: "/dashboard/people",
        icon: "/icons/people.svg",

    },


     {
        label:"Species",
        href: "/dashboard/species",
        icon: "/icons/species.svg",

    },

]

export const filmscolumns: any = [
    { header: 'Film Title', accessor: 'title' },
    { header: 'Release Date', accessor: 'release_date' },
    { header: 'Director', accessor: 'director' },
    { header: 'Producer', accessor: 'producer' },
    { header: 'Episode ID', accessor: 'episode_id' },
    { header: 'Character', accessor: 'characters' },

];

export const peoplecolumns: any = [
    { header: 'Name', accessor: 'name' },
    { header: 'Birth Year', accessor: 'birth_year' },
    { header: 'Gender', accessor: 'gender' },
    { header: 'Hair Color', accessor: 'hair_color' },
    { header: 'Height', accessor: 'height' },
    { header: 'Created', accessor: 'created' },

];

export const speciescolumns: any = [
    { header: 'Name', accessor: 'name' },
    { header: 'Classification', accessor: 'classification' },
    { header: 'Eye Colors', accessor: 'eye_colors' },
    { header: 'Hair Colors', accessor: 'hair_colors' },
    { header: 'Height', accessor: 'average_height' },
    { header: 'Created', accessor: 'created' },

];

export const starshipcolumns: any = [
    { header: 'Name', accessor: 'name' },
    { header: 'Model', accessor: 'model' },
    { header: 'Class', accessor: 'starship_class' },
    { header: 'Passenger', accessor: 'passengers' },
    { header: 'Length', accessor: 'length' },
    { header: 'Character', accessor: 'films' },
];

