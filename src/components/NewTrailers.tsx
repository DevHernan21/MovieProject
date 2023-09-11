import { useEffect, useState, ChangeEvent } from "react";
import { Movie } from "../common/Interface/types";
import { getTrendingNow } from "../services/axios.service";
import TrendingCard from "./TrendingCard";


const NewTrailers = () => {
    const [newTrailers, setNewTrailers] = useState<Movie[]>([]);
    const [sortBy, setSortBy] = useState('day');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newTrailers = await getTrendingNow(sortBy);
                setNewTrailers(newTrailers);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [sortBy])

    const handleSortByChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value);
    };

    return (
        <div className="flex flex-col lg:w-[280px]">
            <p className="mb-6 font-medium flex justify-between items-center">
                <span>New Tendencies</span>
                <span className="text-sm text-gray-400">Sort by</span>
            </p>
            <select className="select select-ghost text-sm" value={sortBy} onChange={handleSortByChange} key={sortBy}>
                <option selected value="day">Last Day</option>
                <option value="week">Last Week</option>
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