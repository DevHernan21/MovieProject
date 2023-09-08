export interface Movie {
    poster_path: string;
    overview: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
    media_type: "movie" | "tv" | "person";
    release_date?: string;
    original_title?: string;
    title?: string;
    adult?: boolean;
    video?: boolean;
    first_air_date?: string;
    original_name?: string;
    origin_country?: string[];
    name?: string;
    profile_path?: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface MovieDetail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | any;
    budget: number;
    genreNames: string[];
    genre_ids: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview?: string;
    popularity: number;
    poster_path: string;
    production_companies: any[];
    production_countries: any[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: any[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}