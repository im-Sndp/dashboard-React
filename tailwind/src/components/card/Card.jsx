import wallet from "../../assets/images/wallet.png";

export const Card = ({Chart}) => {
    return (
        <div className="w-1/2 bg-white p-4">
            <div className="w-10 h-10">
                <img src={wallet} alt="wallet" />
            </div>
            <div className="font-bold text-xl text-gray-700">Super Plus</div>
            <div className="mt-3 mb-3 font-bold text-sm text-gray-400">SALES</div>
            <span className="font-bold text-3xl">$25,647</span>
            <span className="bg-green-500 text-white p-1 rounded-full text-sm font-bold align-text-top">+58%</span>
            <Chart />
        </div>
    )
}