
const NewFrontier = () => {
    return (
        <div className="flex justify-center gap-24 bg-[#E8E8FF] py-32">
            <div>
                <div className="flex justify-center gap-24 items-center h-[50px] w-[400px] bg-[#F7F7F7] border-[1px] border-[#333]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 bg-[#D46666] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#FFE78E] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#6FC4A0] rounded-full"></div>
                    </div>
                    <div className="flex text-[#1B1B1B] text-base font-semibold"><p>Code examples</p></div>
                    <img src="https://i.postimg.cc/j5GGqYBg/SVG.png" alt="" />
                </div>
                <div className=" justify-center gap-24 items-center h-[64px] w-[400px] bg-[#F7F7F7] border-[1px]  border-[#333] text-left leading-[17px]">
                    <p className="text-[#333333] text-[18px] pb-1 font-normal">Your own bank</p>
                    <p className="text-[#000000A3]">You can build a bank powered by logic you've programmed.</p>
                </div>
                <div className=" justify-center gap-24 items-center h-[64px] w-[400px] bg-[#F7F7F7] border-[1px] border-t-0 border-[#333] leading-[17px] text-left">
                    <p className="text-[#333333] text-[18px] pb-1 font-normal">Your own currency</p>
                    <p className="text-[#000000A3]">You can create tokens that you can transfer and use across applications.</p>
                </div>
                <div className=" justify-center gap-24 items-center h-[64px] w-[400px] bg-[#F7F7F7] border-[1px] border-t-0 border-[#333] leading-[17px] text-left">
                    <p className="text-[#333333] text-[18px] pb-1 font-normal">A JavaScript Ethereum wallet</p>
                    <p className="text-[#000000A3]">You can use existing languages to interact with Ethereum and other applications.</p>
                </div>
                <div className=" justify-center gap-24 items-center h-[64px] w-[400px] bg-[#F7F7F7] border-[1px] border-t-0 border-[#333] leading-[17px] text-left">
                    <p className="text-[#333333] text-[18px] pb-1 font-normal">An open, permissionless DNS</p>
                    <p className="text-[#000000A3]">You can reimagine existing services as decentralized, open applications.</p>
                </div>
            </div>
            <div>
                <h3 className="text-[#1B1B1B] text-[31px] font-semibold text-left">A new frontier for development</h3>
                <p className="text-left text-[#1B1B1B] text-xl font-normal pb-4">Ethereum and its apps are transparent and open source. <br />
                You can fork code and re-use functionality others have <br />
                already built. If you don't want to learn a new language you <br />
                can just interact with open-sourced code using JavaScript <br />
                and other existing languages.</p>
                <div className="text-left">
                    <button className="text-white text-base font-normal py-2 px-4 rounded bg-[#1C1CFF]">Developer portal</button>
                </div>
            </div>
        </div>
    );
};

export default NewFrontier;