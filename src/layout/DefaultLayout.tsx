import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthProvider';
import LinkCharLogo from "../assets/svg/LinkChar.svg";
import { Bars3Icon, BellIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import DropdownUser from '../components/DropdownUser';
import MoviesPage from '../pages/Home/MoviesPage';
import TVShowsPage from '../pages/TVShows/TVShowsPage';
import AnimePage from '../pages/Anime/AnimePage';
import PlansPage from '../pages/Plans/PlansPage';
import SearchModal from '../components/SearchModal';
import Login from '../pages/Authentication/Login';
import Loader from '../common/Loader';

const navigation = [
    { name: 'Movies', href: '/', component: <MoviesPage />, current: true, key: "movie" },
    { name: 'TV Shows', href: '/tv-shows', component: <TVShowsPage />, current: false, key: "tv" },
    { name: 'Anime', href: '/anime', component: <AnimePage />, current: false, key: "anime" },
    { name: 'Plans', href: '/plans', component: <PlansPage />, current: false, key: "plans" }
];

const DefaultLayout = () => {
    const { user } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 4000);
    }, [])

    return loading ? (
        <Loader />
    ) : (
        <>
            {
                user ? (
                    <>
                        <div className="flex justify-between items-center py-4 px-4 md:hidden">
                            <Link to="/">
                                <div className="flex-shrink-0">
                                    <img src={LinkCharLogo} alt="Brand" />
                                </div>
                            </Link>
                            <button onClick={() => setIsSidebarOpen((prevState) => !prevState)}>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        </div>
                        <div className="flex items-start">
                            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                            <div className="flex-grow pt-0 pb-7 md:px-[2vw] px-[4vw] md:border-dark min-h-screen">
                                <div className="flex-row flex justify-between md:mb-16 mb-5">
                                    <div className="flex basis-1/2 justify-between items-center md:items-start">
                                        <div className="inline-flex  gap-[40px]  relative pb-3  mt-2 md:mt-4  text-gray-400 ">
                                            {navigation.map((item) => (
                                                <button
                                                    className={`text-white ${item.current === true &&
                                                        "font-medium transition duration-200 text-gray after:absolute after:h-[3px] after:w-5 after:bottom-0 after:left-[5%] after:bg-white"
                                                        }`}
                                                >
                                                    <Link
                                                        key={item.key}
                                                        to={item.href}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <img className="h-8 w-8 rounded-full md:hidden mt-3" src={`${user?.photoURL}`} alt="" />
                                    <div className="flex basis-1/4 justify-end items-center md:block hidden">
                                        <div className="inline-flex  gap-4  relative pb-3  mt-2 md:mt-4  text-gray-400">

                                            <SearchModal />

                                            <button className="relative rounded-full p-1 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-3">
                                                <span className="absolute -inset-1.5" />
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                            <button className="relative rounded-full p-1 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-3">
                                                <span className="absolute -inset-1.5" />
                                                <Squares2X2Icon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            <DropdownUser />
                                        </div>
                                    </div>
                                </div>
                                <Outlet />
                            </div>
                        </div>
                    </>
                ) : (
                    <Login />
                )
            }
        </>
    );
};

export default DefaultLayout;