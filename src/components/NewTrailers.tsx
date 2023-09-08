import { useEffect, useState } from "react";
import { Movie } from "../common/Interface/types";
import { getTrendingNow } from "../services/axios.service";
import TrendingCard from "./TrendingCard";


const NewTrailers = () => {
    const [newTrailers, setNewTrailers] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newTrailers = await getTrendingNow();
                setNewTrailers(newTrailers);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [])

    return (
        <div className="flex flex-col lg:w-[280px]">
            <p className="mb-6 font-medium flex justify-between items-center">
                <span>New Tendencies</span>
                <span className="text-sm text-gray-400">Sort by</span>
            </p>
            <select className="select select-ghost text-sm">
                <option disabled selected>Today</option>
                <option>Last Day</option>
                <option>Last Week</option>
                <option>Last Year</option>
            </select>
            <div className="flex flex-col mt-6">
                {newTrailers && newTrailers.length > 0 && newTrailers.slice(0, 2).map((newTrailer, index) => (
                    <TrendingCard key={index} {...newTrailer} />
                ))}
            </div>
        </div>
    )
}

export default NewTrailers;