
const InternetAsset = () => {
    return (
        <div className="flex items-center bg-[#E1FEFA] px-10">
            <img src="https://i.postimg.cc/hGswm76d/image.png" alt="" />
            <div>
                <h3 className="text-[#1B1B1B] text-[31px] font-semibold text-left">The internet of assets</h3>
                <p className="text-[#1B1B1B] text-xl font-normal pb-4 text-left">Ethereum isn't just for digital money. Anything you can own
                can be represented, traded and put to use as non-fungible
                tokens (NFTs). You can tokenise your art and get royalties
                automatically every time it's re-sold. Or use a token for
                something you own to take out a loan. The possibilities are
                growing all the time.</p>
                <div className="text-left">
                    <button className="bg-[#1C1CFF] py-2 px-4 text-white rounded text-left">More on NFTs</button>
                </div>
            </div>
        </div>
    );
};

export default InternetAsset;