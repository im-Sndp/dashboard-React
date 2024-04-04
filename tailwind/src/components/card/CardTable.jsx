import youtube from "../../assets/images/youtube.png"

export const CardTable = ({title,image}) => {
    return(
        <div className="pt-2 pb-2">
            <div className="flex">
                <div className="w-1/3">
                    <div className="flex">
                        <div>
                            <img src={image} className="w-8 h-8" alt="youtube" />
                        </div>
                        <div className="pl-2 pt-1">{title}</div>
                    </div>
                </div>
                <div className="w-2/3 flex space-x-16">
                    <div>2.4k</div>
                    <div className="text-green-500">$16,000</div>
                    <div>340</div>
                    <div className="text-blue-500">4.9%</div>
                </div>
            </div>
        </div>
    )
}