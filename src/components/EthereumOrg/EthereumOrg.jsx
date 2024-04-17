
const EthereumOrg = () => {
    return (
        <div>
            <h2 className="text-[#1B1B1B] text-left text-[32px] font-semibold">Explore ethereum.org</h2>

            <div className="flex gap-8">
                <div className="border-[1px] border-[#333]">
                    <img className="bg-gradient-to-tr from-purple-100 via-blue-200 to-green-300 pr-24" src="https://i.postimg.cc/HLqMGzWQ/image.png" alt="#" />
                    <p className="text-[rgb(51,51,51)] text-2xl text-left font-semibold pb-3 pt-5">Level up your upgrade knowledge</p>
                    <p className="text-[#000000A3] text-base font-normal text-left">The Ethereum roadmap consists of interconnected
                    upgrades designed to make the network more
                    scalable, secure, and sustainable.</p>
                </div>
                <div className="border-[1px] border-[#333]">
                    <img className="bg-gradient-to-tr from-purple-100 via-blue-200 to-green-300 pr-16" src="https://i.postimg.cc/Bbq8tRW3/image.png" alt="#" />
                    <p className="text-[#333333] text-2xl text-left pb-3 font-semibold pt-9">Ethereum for enterprise</p>
                    <p className="text-[#000000A3] text-base font-normal text-left">See how Ethereum can open up new business
                    models, reduce your costs and future-proof your
                    business.</p>
                </div>
                <div className="border-[1px] border-[#333]">
                    <img className="bg-gradient-to-tr from-purple-100 via-blue-200 to-green-300 pr-20 h-[240px]" src="https://i.postimg.cc/MKCs4Y1w/image.png" alt="#" />
                    <p className="text-[#333333] text-2xl text-left font-semibold pb-3 pt-5">The Ethereum community</p>
                    <p className="text-[#000000A3] text-base font-normal text-left">Ethereum is all about community. It's made up of
                    people from all different backgrounds and interests.
                    See how you can join in.</p>
                </div>
            </div>
        </div>
    );
};

export default EthereumOrg;