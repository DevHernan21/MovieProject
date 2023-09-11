import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { RefObject, useState, useRef } from 'react';
import { getSearchResults } from '../services/axios.service';
import { Movie } from '../common/Interface/types';
import SearchCard from './SearchCard';
import { useAuth } from '../context/AuthProvider';

const SearchModal = () => {
    const myModal = useRef<HTMLDialogElement>(null)
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const { user } = useAuth();

    const handleSearchClick = async () => {
        try {
            const searchResults = await getSearchResults(searchQuery);
            setSearchResults(searchResults);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <button onClick={() => myModal.current?.showModal()} className="relative rounded-full p-1 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <dialog ref={myModal} className="modal xs:modal-middle mt-5 mb-10 rounded-lg">
                <div className="modal-box w-11/12 max-w-full max-h-full">
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-2xl p-5 text-gray">Search</h3>
                        <label className="relative block w-[50%]">
                            <span className="absolute inset-y-0 left-0 flex items-center">
                                <button onClick={handleSearchClick} className="relative rounded-full p-1 text-black">
                                    <span className="absolute -inset-1.5" />
                                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </span>
                            <input
                                type="text"
                                name="search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                placeholder="Search for any content..."
                            />
                        </label>
                    </div>
                    {searchResults.length > 0 ? (
                        <ul className="grid  gap-x-8 gap-y-10 pt-2 grid-cols-5 lg:grid-cols-lg pt-10">
                            {searchResults?.map((result) => (
                                <li key={result.id}>
                                    <SearchCard movie={result} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex flex-col items-center ">
                            <h1 className="text-6xl p-5 text-gray">Hello {user?.displayName}</h1>
                            <h2 className="text-2xl p-5 text-gray">Here you can search for your favorite content</h2>
                        </div>
                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle hover:btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
};

export default SearchModal;