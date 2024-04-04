export const SidebarItems = ({logo,title,activated})=>{
    return(
<div className={`flex rounded-md text-[#FFFFFF]/80 mx-1 px-5 py-2 gap-x-2 cursor-pointer ${activated ? 'bg-[#FFFFFF]/10' : ''} hover:bg-[#FFFFFF]/10`}>            {logo} {title}
        </div>
    )
}