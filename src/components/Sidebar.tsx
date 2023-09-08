import React from 'react';
import { Link } from 'react-router-dom';
import LinkCharLogo from "../assets/svg/LinkChar.svg";
import { useCurrentViewPort } from '../hooks/useCurrentViewPort';
import { Cog8ToothIcon, PlayIcon, UserMinusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import NewTrailers from './NewTrailers';
import RecomendedGenres from './RecomendedGenres';
import { useAuth } from '../context/AuthProvider';

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
}
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
    const { isMobile } = useCurrentViewPort();
    const { user, logOut } = useAuth();

    const closeSideBar = () => {
        setIsSidebarOpen(false);
    }

    return (
        <div className={`shrink-0 h-full md:max-w-[260px] w-[70vw] bg-zinc-900 fixed  -translate-x-full transition duration-300 ${isSidebarOpen && "translate-x-0"
            } top-0 shadow-md md:sticky md:translate-x-0 md:bg-transparent md:shadow-none z-50`}>
            {!isMobile && (
                <>
                    <Link to={"/"} className="flex items-center justify-center mt-4 mb-3 ">
                        <div className="flex-shrink-0">
                            <img src={LinkCharLogo} alt="LinkChar" className="w-24 h-auto" />
                        </div>
                    </Link>
                    <div className="shrink-0 max-w-[280px] w-full hidden lg:block pl-6 top-0 sticky mt-16">
                        <div className="text-white flex flex-col">
                            <NewTrailers />
                            <RecomendedGenres />
                        </div>
                    </div>
                </>
            )}
            <div className="md:hidden absolute top-2 right-4 text-red-dark hover:text-red-400 bg-transparent transition ">
                <button onClick={closeSideBar}>
                    <XMarkIcon className="h-6 w-6 text-white" />
                </button>
            </div>
            <div className="md:hidden flex flex-col gap-4 mt-4 ml-3 px-4">
                <Link to={"/"} className="flex items-center justify-center mt-4 ">
                    <div className="flex-shrink-0">
                        <img src={LinkCharLogo} alt="LinkChar" className="w-24 h-auto" />
                    </div>
                </Link>
                <div className="flex flex-col items-center justify-center mb-2">
                    <div className="flex-shrink-0">
                        <img className="h-8 w-8 rounded-full" src={`${user?.photoURL}`} alt="" />
                    </div>
                    <div className="flex-shrink-0 text-gray">
                        {user?.displayName}
                    </div>
                </div>
                <button onClick={closeSideBar}>
                    <Link
                        to="/"
                        className={`flex gap-6 items-center text-gray border-r-4 border-gray font-medium hover:text-white transition duration-300`}
                    >
                        <PlayIcon className="h-6 w-6 text-white" />
                        <span>Home</span>
                    </Link>
                </button>
                <button onClick={closeSideBar}>
                    <Link
                        to="/"
                        className={`flex gap-6 items-center text-gray border-r-4 border-gray font-medium hover:text-white transition duration-300`}
                    >
                        <Cog8ToothIcon className="h-6 w-6 text-white" />
                        <span>Settings</span>
                    </Link>
                </button>
                <button onClick={logOut}>
                    <Link
                        to="/login"
                        className={`flex gap-6 items-center text-gray border-r-4 border-gray font-medium hover:text-white transition duration-300`}
                    >
                        <UserMinusIcon className="h-6 w-6 text-white" />
                        <span>LogOut</span>
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
