
const EtheriumIntro = () => {
    return (
        <div className="bg-[#CCFCFF] flex justify-center items-center py-5 px-5">
            <img src="https://i.postimg.cc/XqRFDrMN/image.png" alt="" />
            <div>
                <h4 className="text-[#1B1B1B] text-[31px] font-semibold text-left">What is Ethereum</h4>
            <p className="text-[#1B1B1B] text-xl font-normal text-left pb-5">Ethereum is a technology that's home to digital money,
                global payments, and applications. The community has
                built a booming digital economy, bold new ways for
                creators to earn online, and so much more. It's open to
                everyone, wherever you are in the world – all you need is
                the internet.</p>
                <div className="flex gap-2">
                    <button className="py-2 px-4 bg-[#1C1CFF] rounded text-white">What is Ethereum</button>
                    <button className="py-2 px-4 rounded border-[1px] border-[#1B1B1B]">More on digital money</button>
                </div>
            </div>
        </div>
    );
};

export default EtheriumIntro;