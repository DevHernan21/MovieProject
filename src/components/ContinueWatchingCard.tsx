import { CalendarDaysIcon, PlayIcon } from "@heroicons/react/24/solid"
import { MovieDetail } from "../common/Interface/types"
import { imgUrl } from "../common/constants";


const ContinueWatchingCard = (actualMovie: MovieDetail) => {
    const { title, backdrop_path, release_date, original_language  } = actualMovie;


    return (
        <div className="relative rounded-lg overflow-hidden mr-14 basis-1/2 h-[210px]">
            <img src={`${imgUrl}${backdrop_path}`} alt={title} className="w-full h-full" />
            <div className="h-[54px] mx-auto my-auto absolute inset-x-0 bottom-0 flex flex-row items-center p-2 justify-between bg-[color:var(--fill)] rounded-[10px_10px_20px_20px] backdrop-blur-[5px] backdrop-brightness-[100%]  shadow-[var(--blur)]">
                <div className="relative w-[28px] h-[28px] bg-[#c4c4c4] rounded-[14px]">
                    <button className="flex items-center justify-center w-[28px] h-[28px] bg-grey rounded-full">
                        <PlayIcon className="h-5 w-5 text-white" />
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="text-white text-xs font-bold">
                        {title}
                    </div>
                    <div className="text-zinc-400 text-xs font-normal">
                        {original_language}
                    </div>
                    <progress className="progress w-56"></progress>
                </div>
                <div className="flex flex-row">
                    <p className='my-auto'><CalendarDaysIcon className="h-4 w-4 text-white" /></p>
                    <p className='my-auto ml-1 text-white'>{release_date}</p>
                </div>
            </div>
        </div>
    )
}

export default ContinueWatchingCard