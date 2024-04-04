import person from "../../assets/images/person.png"
import search from "../../assets/images/search.png"
import messages from "../../assets/images/message.png"
import warning from "../../assets/images/warning.png";

export const Navbar = () => {
    return(
        <div>
            <div>
    <div className="bg-white pr-6 md:pr-64 py-0.5 h-18 flex w-screen fixed  sm:pr-20 overflow-y-auto transition-all duration-300">
        <div className="pt-5 pl-2 text-indigo-900 font-bold md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
        </div>
        <div className="flex p-3 md:w-3/4 sm:w-2/3"> 
            <img className="w-10 h-10" src={person} alt="profile-logo" />
            <span className="block p-2 font-semibold">Nabanita</span>
        </div>
        <div className="flex md:w-1/4 sm:w-1/3">
            <img className="w-7 h-7 bg-gray-100 rounded-full p-1 mx-2 my-4" src={search} alt="search" />
            <img className="w-7 h-7 bg-gray-100 rounded-full p-1 mx-2 my-4" src={messages} alt="search" />
            <img className="w-7 h-7 bg-gray-100 rounded-full p-1 mx-2 my-4" src={warning} alt="search" />
            <a className="mt-4 mt-2 text-indigo-500 font-semibold" href="#">Logout</a>
        </div>
    </div>
</div>

        </div>
    )
}