import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TV } from "../../common/Interface/types";
import { getAiringTv, getPopularTv, getTopRatedTv, getTrendingTv } from "../../services/axios.service";
import { imgUrl } from "../../common/constants";
import { PlayIcon, StarIcon } from "@heroicons/react/24/solid";
import TvCard from "../../components/TvCard";

const TVShowsPage = () => {
   const [trendTvData, setTrendTvData] = useState<TV[]>([]);
   const [popularTvData, setPopularTvData] = useState<TV[]>([]);
   const [airingTvData, setAiringTvData] = useState<TV[]>([]);
   const [ratedTvData, setRatedTvData] = useState<TV[]>([]);


   useEffect(() => {
      const fetchData = async () => {
         try {
            const trendingTv = await getTrendingTv();
            const popularTv = await getPopularTv();
            const airingTv = await getAiringTv();
            const ratedTv = await getTopRatedTv();
            setTrendTvData(trendingTv);
            setPopularTvData(popularTv);
            setAiringTvData(airingTv);
            setRatedTvData(ratedTv);
         } catch (error) {
            console.log(error);
         }
      }

      fetchData();
   }, []);

   const tvSections = [
      {
         title: 'Trending TV',
         data: trendTvData
      },
      {
         title: 'Popular TV',
         data: popularTvData
      },
      {
         title: 'Airing TV',
         data: airingTvData
      },
      {
         title: 'Top Rated TV',
         data: ratedTvData
      }
   ]

   return (
      <div className="flex flex-col flex-1 ">
         {tvSections.map((tvSection, index) => (
            <div key={index} className="flex flex-col">
               <div className="flex flex-row justify-between md:pt-10 ml-20 mr-20 items-center">
                  <div className="text-white text-lg font-bold">
                     {tvSection.title}
                  </div>
                  <div className="text-zinc-600 text-xs font-medium">
                     <Link to={`/`}>
                        All {tvSection.title} {`>`}
                     </Link>
                  </div>
               </div>

               <div className="grid mb-10 gap-x-8 gap-y-8 grid-cols-3 md:grid-cols-5 lg:grid-cols-lg pt-10 md:ml-20">
                  {tvSection.data && tvSection.data.length > 0 && tvSection.data.slice(0, 5).map((tv, index) => (
                     <TvCard key={index} {...tv} />
                  ))}
               </div>
            </div>
         ))}
      </div>
   )
};

export default TVShowsPage;