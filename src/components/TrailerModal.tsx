import { useState, useEffect, RefObject } from 'react';
import { getTrailer } from '../services/axios.service';

interface TrailerModalProps {
    modalRef: RefObject<HTMLDialogElement>;
    id: number;
    title?: string;
    overview?: string;
    media_type?: string;
}

const TrailerModal = ({ modalRef, id, title, overview, media_type }: TrailerModalProps) => {
    const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const trailer = await getTrailer(id, media_type)
                setTrailerUrl(trailer)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id, trailerUrl]);

    return (
        <dialog ref={modalRef} className="modal xs:modal-middle mt-5 mb-10 rounded-lg">
            <div className="modal-box w-11/12 max-w-full max-h-full">
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-2xl p-5 text-gray">Watch {title} - Trailer</h3>
                    <p className="whitespace-wrap overflow-hidden text-black text-base mt-1 text-center px-2 py-2 ">
                        {overview}
                    </p>
                </div>
                <div className="rounded-lg md:overflow-hidden md:relative group">
                    {trailerUrl ? (
                        <iframe
                            key={id}
                            width="100%"
                            height="500px"
                            src={trailerUrl}
                            title={`${title} Trailer`}
                            allowFullScreen
                            className="rounded-lg md:overflow-hidden md:relative group w-full h-full md:h-[500px]"
                        />
                    ) : (
                        <div className="flex flex-col items-center ">
                            <h1 className="text-6xl p-5 text-gray">Ooops!</h1>
                            <h2 className="text-2xl p-5 text-gray">No {title} Trailer Found</h2>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn btn-primary">Back to Home</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button onClick={() => setTrailerUrl(null)} className="btn btn-sm btn-circle hover:btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default TrailerModal