
const Navbar = () => {
    return (
        <div className="flex justify-around gap-[550px] pb-4">
            <div className="flex gap-12">
                <img src="https://i.postimg.cc/sgsLxX8Z/Link-Home-SVG.png" alt="#" />
                <ul className="flex items-center text-[#1B1B1B] text-base font-normal gap-5">
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Use</a></li>
                    <li><a href="#">Build</a></li>
                    <li><a href="#">Participate</a></li>
                    <li><a href="#">Research</a></li>
                </ul>
            </div>
            <div className="flex items-center">
                <img className="mr-5" src="https://i.postimg.cc/5NHZr3k9/Button-Switch-to-Dark-Theme-SVG.png" alt="#" />
                <img src="https://i.postimg.cc/3wpGfP2j/SVG.png" alt="#" /><span className="text-[#1B1B1B] text-base font-normal ml-1">Languages EN</span>
            </div>
        </div>
    );
};

export default Navbar;