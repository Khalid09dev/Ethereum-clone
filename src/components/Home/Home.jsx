import Banner from "../Banner/Banner";
import Contribute from "../Contribute/Contribute";
import EthereumOrg from "../EthereumOrg/EthereumOrg";
// import EthereumToday from "../EthereumToday/EthereumToday";
import EtheriumIntro from "../EtheriumIntro/EtheriumIntro";
import FinancialSystem from "../FinancialSystem/FinancialSystem";
import GetStarted from "../GetStarted/GetStarted";
import InternetAsset from "../InternetAsset/InternetAsset";
import Navbar from "../Navbar/Navbar";
import NewFrontier from "../NewFrontier/NewFrontier";
import OpenInternet from "../OpenInternet/OpenInternet";
import Welcome from "../Welcome/Welcome";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Welcome></Welcome>
            <GetStarted></GetStarted>
            <EtheriumIntro></EtheriumIntro>
            <FinancialSystem></FinancialSystem>
            <InternetAsset></InternetAsset>
            <OpenInternet></OpenInternet>
            <NewFrontier></NewFrontier>
            <EthereumOrg></EthereumOrg>
            <Contribute></Contribute>
            {/* <EthereumToday></EthereumToday> */}
            {/* <img src="https://i.postimg.cc/4yGnKq9P/svgviewer-png-output-3.png" alt="" /> */}
            <img src="https://i.postimg.cc/Nf4BDL3Q/SVG.png" alt="" />
            {/* <img src="https://i.postimg.cc/sgrKjgxG/svgviewer-png-output.png" alt="" /> */}
            {/* <img src="https://i.postimg.cc/YCRNtNTT/svgviewer-png-output-1.png" alt="" /> */}
            {/* <img src="https://i.postimg.cc/MKxjXM0w/svgviewer-png-output-2.png" alt="" /> */}

            <img src="https://i.postimg.cc/Y2DGpr22/Link-Git-Hub-SVG.png" alt="#" />
            <img src="https://i.postimg.cc/tgBPWX5T/Link-Twitter-SVG.png" alt="#" />
            <img src="https://i.postimg.cc/wTz5mT8X/Link-Discord-SVG.png" alt="#" />
        </div>
    );
};

export default Home;