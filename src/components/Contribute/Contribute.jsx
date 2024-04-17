
const Contribute = () => {
    return (
        <div className="flex justify-center items-center gap-20 bg-gradient-to-r from-purple-300 via-blue-500 to-green-400 rounded px-14 mt-24">
            <div>
                <h1 className="text-[#1B1B1B] text-[32px] text-left font-bold">Contribute to ethereum.org</h1>
                <p className="text-[#666666] text-xl font-normal pt-6 pb-7 text-left">This website is open source with hundreds of community
                contributors. You can propose edits to any of the content on this
                site, suggest awesome new features, or help us squash bugs.</p>
                <div className="flex gap-2">
                <button className="text-white text-base font-normal bg-[#1C1CFF] py-2 px-4 rounded">More on contributing</button>
                    <button className="py-2 flex gap-2 px-4 border-[1px] border-[#1B1B1B] rounded"><span><img src="https://i.postimg.cc/CKxnF3gV/SVG.png" alt="" /></span>GitHub</button>
                </div>
            </div>
            <img src="https://i.postimg.cc/N0SSswHy/image.png" alt="#" />
        </div>
    );
};

export default Contribute;