export const  Sidebar = ({isClick}) => {

    console.log("is click from Sidebar" + isClick)
    return(
    <div className={`md:bg-[#1E2640] h-screen w-[224px] fixed ${isClick ? 'md:block bg-[#1E2640]' : 'hidden md:block'}`}>
        Content
    </div>

    )
}