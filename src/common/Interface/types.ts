export interface Movie {
    poster_path: string;
    overview: string;
    genreNames: string[];
    genre_ids: Genre[];
    id: number;
    original_language: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
    media_type: string;
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

export interface Animes {
    score: number;
    aired: {
        string: string
    }
    status: string;
    mal_id: number;
    title: string;
    synopsis: string;
    images: {
        jpg: {
            image_url: string;
            large_image_url: string;
            small_image_url: string;
        };

    };
    genres: Object[];
    trailer: Object[];
    pagination: {
        last_visible_page: number;
    }
}

export interface TV {
    adult: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: Object[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
}
