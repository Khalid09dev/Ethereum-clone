
const OpenInternet = () => {
    return (
        <div>
            <div className="flex items-center bg-[#FFE5F9] py-5">
            <div className="pl-14">
                <h3 className="text-[#1B1B1B] text-[31px] font-semibold text-left">An open internet</h3>
                <p className="text-[#1B1B1B] text-xl font-normal pb-4 text-left">Today, we gain access to 'free' internet services by
                giving up control of our personal data. Ethereum services
                are open by default – you just need a wallet. These are
                free and easy to set up, controlled by you, and work
                without any personal info.</p>
                <div className="text-left flex gap-2">
                    <button className="bg-[#1C1CFF] py-2 px-4 text-white rounded text-left">Explore the open internet</button>
                    <button className="py-2 px-4 border-[1px] border-[#1B1B1B] rounded text-base font-normal">More on wallets</button>
                </div>
            </div>
            <img src="https://i.postimg.cc/4N3z4Hb0/image.png" alt="" />
        </div>
        </div>
    );
};

export default OpenInternet;