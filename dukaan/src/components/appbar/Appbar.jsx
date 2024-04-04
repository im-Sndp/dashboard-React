import speaker from "../../assets/speaker.webp";

export const Appbar = ()=>{
    return(
        <div className="flex content-between w-full p-5 shadow-md justify-between">
            <div className="flex gap-x-4 text-xl items-center ">
                <div className="font-medium">
                    Payouts
                </div>
                <div className="flex gap-x-2 text-xs text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                    How it works
                </div>
            </div>
            <div className="flex items-center gap-2 bg-gray-500/10 w-[400px] px-5 rounded-md ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-gray-500/90 w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder="Search features, tutorials, etc." className="bg-transparent outline-none w-full"/>
            </div>
            <div className="flex gap-2 px-6">
                <div className="bg-gray-500/20 rounded-full p-2 content-center">
                    <img src={speaker} alt="speaker" />
                </div>
                <div className="bg-gray-500/20 rounded-full p-2 content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gray-800" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}