import user from "../../assets/user.svg"

export const UserProfile = () => {
    return (
        <div className="flex text-white/90 items-center justify-between px-4 py-2">
            <div className="flex content-center gap-2">
                <div className="rounded-[4px] flex content-center">
                <img src={user} className="rounded-lg" alt="user-profile" />
                </div>
                <div className="px-2 font-semibold">
                    Nishyan
                    <div className="font-thin text-sm underline cursor-pointer text-white/70">Visit Store</div>
                </div>
            </div>
            <div className="px-2 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="font-bold text-white w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    )
}