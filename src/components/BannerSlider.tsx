import React, { useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Movie } from '../common/Interface/types';
import { imgUrl } from '../common/constants';
import { PlayIcon } from '@heroicons/react/24/solid';

const BannerSlider = ({ bannerMovies }: { bannerMovies: Movie[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === bannerMovies.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [bannerMovies]);

    return (
        <AwesomeSlider
            selected={currentIndex}
            mobileTouch={true}
            className="relative rounded-2xl overflow-hidden mr-14 h-[170px]"
        >
            {bannerMovies.map((movie, index) => (
                <div key={movie.id}>
                    <img
                        src={`${imgUrl}${movie.backdrop_path}`}
                        alt="Backdrop image"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 p-2 rounded-full text-white">
                        {`${movie.popularity} amigos`}
                    </div>

                    <button className="px-2.5 py-1 flex items-center justify-center absolute bottom-2 left-2 bg-orange-400 text-white rounded-full">
                        <div className="relative w-[28px] h-[28px] bg-[#c4c4c4] rounded-[14px] mr-2">
                            <div className="flex items-center justify-center bg-grey rounded-full w-[28px] h-[28px]">
                                <PlayIcon className="h-5 w-5 text-white" />
                            </div>
                        </div>
                        Watch Now
                    </button>

                    <div className="absolute bottom-2 right-2 text-white text-5xl font-bold hidden md:block">
                        {movie.title}
                    </div>
                </div>
            ))}
        </AwesomeSlider>
    );
};

export default BannerSlider;
