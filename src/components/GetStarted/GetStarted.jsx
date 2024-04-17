
const GetStarted = () => {
    return (
        <div className="bg-gray-100">
                <div className="flex justify-center items-center gap-10 pl-24 mt-10 pt-8">
                <div>
                    <h1 className="text-[#1B1B1B] text-[32px] font-semibold text-left">Get Started</h1>
                    <p className="text-[#1B1B1B] text-xl font-normal text-left">ethereum.org is your portal into the world of Ethereum.
                    The tech is new and ever-evolving – it helps to have a
                    guide. Heres what we recommend you do if you want
                    to dive in.</p>
                </div>
                <img src="https://i.postimg.cc/HLsXrDd2/get-started.png" alt="" />
            </div>

            <div className="grid gap-5 grid-cols-2 pb-14 px-10">
                <div className=" border-[1px] border-[#000]">
                <div className="pl-20 bg-gradient-to-tr from-purple-100 via-blue-200 to-green-300"><img src="https://i.postimg.cc/XqXsdBWs/image.png" alt="" /></div>
                    <div className="bg-white text-left pt-6 pb-6 pl-5 border border-t-gray-300">
                        <p className="text-[#333] text-2xl font-semibold">Pick a wallet</p>
                        <p className="text-[#000000A3] text-base font-medium pt-2">A wallet lets you connect to Ethereum and manage your funds.</p>
                    </div>
                </div>
                <div className=" border-[1px] border-[#000]">
                <div className="pl-20 bg-gradient-to-tr from-purple-100 via-blue-200 to-green-300"><img src="https://i.postimg.cc/TPw0ZWLf/image.png" alt="" /></div>
                    <div className="bg-white text-left pt-6 pb-6 pl-5 border border-t-gray-300">
                        <p className="text-[#333] text-2xl font-semibold">Get ETH</p>
                        <p className="text-[#000000A3] text-base font-medium pt-2">ETH is the currency of Ethereum – you can use it in applications.</p>
                    </div>
                </div>
                <div className=" border-[1px] border-[#000]">
                <div className="pl-20 bg-gradient-to-tr from-purple-100 via-blue-200 to-green-300"><img src="https://i.postimg.cc/P5nBsKTh/image.png" alt="" /></div>
                    <div className="bg-white text-left pt-6 pb-12 pl-5 border border-t-gray-300">
                        <p className="text-[#333] text-2xl font-semibold">Use a dapp</p>
                        <p className="text-[#000000A3] text-base font-medium pt-2">Dapps are applications powered by Ethereum. See what you can do.</p>
                    </div>
                </div>
                <div className=" border-[1px] border-[#000]">
                <div className="pl-20 bg-gradient-to-tr from-purple-100 via-blue-200 to-green-300"><img src="https://i.postimg.cc/wxVVTVXg/image.png" alt="" /></div>
                    <div className="bg-white text-left pt-6 pb-6 pl-5 border border-t-gray-300">
                        <p className="text-[#333] text-2xl font-semibold">Start building</p>
                        <p className="text-[#000000A3] text-base font-medium pt-2">If you want to start coding with Ethereum, we have documentation, tutorials, and more in our developer portal.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;