import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Animes } from "../../common/Interface/types";
import { getAnimes } from "../../services/axios.service";
import AnimeCard from "../../components/AnimeCard";

const AnimePage = () => {
   const [animeData, setAnimeData] = useState<Animes[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const animes = await getAnimes();
            setAnimeData(animes);
         } catch (error) {
            console.log(error);
         }
      }

      fetchData();
   },[]);

   return (
      <ul className="grid  gap-x-8 gap-y-10 grid-cols-5 lg:grid-cols-lg md:pt-10 md:ml-20">
         {animeData?.map((anime) => (
            <li key={anime.mal_id}>
               <AnimeCard {...anime}/>
            </li>
         ))}
      </ul>
   )
};

export default AnimePage;