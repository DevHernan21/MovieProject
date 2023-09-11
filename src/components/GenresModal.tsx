import { RefObject } from 'react';
import { Movie } from '../common/Interface/types';
import GenresModalCard from './GenresModalCard';

interface GenresModalProps {
    genreName: string;
    modalRef: RefObject<HTMLDialogElement>;
    moviesContent: Movie[];
}

const GenresModal = ({ genreName, modalRef, moviesContent }: GenresModalProps) => {
    return (
        <>
            <dialog ref={modalRef} className="modal xs:modal-middle mt-5 mb-10 rounded-lg">
                <div className="modal-box w-11/12 max-w-full max-h-full">
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-2xl p-5 text-gray">{genreName} Genres</h3>
                    </div>
                    {moviesContent.length > 0 ? (
                        <ul className="grid  gap-x-8 gap-y-10 pt-2 grid-cols-5 lg:grid-cols-lg pt-10">
                            {moviesContent?.map((movie) => (
                                <li key={movie.id}>
                                    <GenresModalCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex flex-col items-center ">
                            <h1 className="text-6xl p-5 text-gray">Ooops!</h1>
                            <h2 className="text-2xl p-5 text-gray">No Movies Genres Found</h2>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn btn-primary">Back to Home</button>
                                </form>
                            </div>
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

export default GenresModal;