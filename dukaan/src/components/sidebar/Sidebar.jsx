import { AvailableCredit } from "./AvaiableCredit"
import { sideBarConent } from "./SidebarContent"
import { SidebarItems } from "./SidebarItems"
import { UserProfile } from "./UserProfile"

export const Sidebar = () =>{
    return(
        <div className="flex flex-col justify-between h-screen w-[260px] bg-[#1E2640]">
            <div>
                <UserProfile />
                <div className="py-4">
                    {sideBarConent.map((content , index) => {
                        return(
                            <SidebarItems key={index}
                                title= {content.title}
                                logo={content.logo} 
                                activated={content.activated}
                            />
                        )
                    })}
                </div>
            </div>
            <AvailableCredit credit={"224.10"} />
        </div>
    )
}