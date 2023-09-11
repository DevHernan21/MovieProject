import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { Fragment } from "react"
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
};
const DropdownUser = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate()
    const userNavigation = [
        { name: `Wellcome ${user?.displayName}` },
        { name: 'Your Profile', redirectTo: '/' },
        { name: 'Settings', redirectTo: '/' },
        { name: 'LogOut', logout: true },
    ];

    const handleItemClick = (item: any) => {
        if (item.redirectTo) {
            navigate(item.redirectTo);
        } else if (item.logout) {
            logOut();
        }
    };
    
    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <Menu.Button className="relative flex max-w-xs items-center rounded-full text-sm focus:ring-2 focus:ring-white focus:ring-offset:gray-800">
                    <img className="h-8 w-8 rounded-full" src={`${user?.photoURL}`} alt="" />
                    <ChevronDownIcon className="h-5 w-5 text-white ml-1" aria-hidden="true" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                                <button
                                    onClick={() => handleItemClick(item)}
                                    className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                >
                                    {item.name}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
};

export default DropdownUser;