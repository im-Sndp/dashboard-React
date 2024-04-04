export const Appbar = ({setClick}) => {
    return(
        <div className="flex p-4">
            <div className="md:hidden">
                <button onClick={()=>{
                    setClick(isClick => !isClick);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            </div>
            <div>Payouts</div>
        </div>
    )
}