import Image from "next/image"
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid"
function Header(){

    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative items-center h-10 cursor-pointer my-auto">
                <Image src='https://links.papareact.com/qd3'
                layout='fill'
                objectFit="contain" 
                objectPosition="left"/>
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 shadow-sm border-2 border-gray-300">
                <input type="text" placeholder="Start Your Search" className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-black text-sm"></input>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
            </div>
            <div className="flex items-center justify-end space-x-4">
                <p className="hidden md:inline-flex">Become a host</p>
                <GlobeAltIcon className="h-8 cursor-pointer"/>
                <div className="flex items-center space-x-2 border-2 rounded-full p-2 cursor-pointer">
                    <MenuIcon className="h-8"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>

        </header>
    )
}

export default Header