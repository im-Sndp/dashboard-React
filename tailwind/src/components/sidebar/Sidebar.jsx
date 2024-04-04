import { sidebarArray } from "./SidebarArray"

export const Sidebar = ()=>{
    return(
            <div className="hidden md:block bg-indigo-900 w-64 fixed h-screen overflow-y-auto">
                <div className="bg-indigo-800">
                    <div className="text-gray-200 p-5 text-xl font-bold">SUPER CORP</div>
                </div>
                <div>
                    <div className="p-5 text-gray-200 text-xs font-bold">PAGES</div>
                </div>
                {sidebarArray.map((item, index) => {
                    return (
                        <div key={index} className="flex m-5 mt-2 items-center">
                            <div><img className="w-5 h-5" src={item.image} alt="dashboard" /></div>
                            <div className="mx-3 text-sm text-gray-100">{item.title}</div>
                        </div>
                    )
                })}
            </div>
        )
}