import { Card } from "./Card"
import { BarChart } from "./charts/BarChart"
import { LineChat } from "./charts/LineChart"
import { DoughnutChat } from "./charts/DoughnutChart"
import { RadarChat } from "./charts/RadarChart"
import { CardTable } from "./CardTable"
import { tableData } from "./tableData"


export const CardContainer = () => {
    return(
        <div>
            <div className="flex m-7 space-x-6">
                <Card Chart={BarChart} /> 
                <Card Chart={LineChat} /> 
            </div>
            <div className="flex m-7 space-x-6">
                <Card Chart={DoughnutChat} />
                <Card Chart={RadarChat} />
            </div>
            <div className="flex m-7 space-x-6 ">
                <div className="w-1/3 bg-white p-4 divide-y divide-gray-200">
                    <div className="font-bold text-l pb-4">Top Countries</div>
                    <div className="pt-4">
                        <DoughnutChat />
                    </div>
                </div>
                <div className="w-2/3 bg-white p-4">
                    <div className="font-bold text-l pb-4">Top Channels</div>
                    <div className="flex bg-gray-200 p-2 text-gray-500 uppercase font-bold text-xs">
                        <div className="w-1/3">
                            <div>Source</div>
                        </div>
                        <div className="w-3/4 flex space-x-14">
                            <div>Visitors</div>
                            <div>Revenues</div>
                            <div>Sales</div>
                            <div>Conversion</div>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {tableData.map((data)=>{
                            return(
                                <CardTable title={data.title} image={data.image} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}