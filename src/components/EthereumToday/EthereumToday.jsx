
const EthereumToday = () => {
    return (
        <div>
            <h3 className="text-[#1B1B1B] text-[32px] font-semibold">Ethereum today</h3>
            <p className="text-[#1B1B1B] text-xl font-normal">The latest network statistics</p>

            <div className="grid grid-cols-2">
                <div style={{backgroundImage: `url("https://i.postimg.cc/Nf4BDL3Q/SVG.png")`}}>
                    <p>Total ETH staked</p>
                    <p>The total amount of ETH currently being staked and securing the network.</p>
                    <h1>31.43M</h1> 
                    <span className="text-[#333333] text-xl font-normal bg-[#E8E8FF]">30d</span>
                    <span>90d</span>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default EthereumToday;