import "./HomePage.css";
import HomePageImage from "./HomePageImage/Designer.png";

const HomePage = () => {
  return (
    <>
    <div className="homeHeader">
        <div className="homeHeaderTitle">MyOnlineArchive</div>
        <div className="homeHeaderBtn">Get Started</div>
    </div>
    <div className="homeBody">
        <div>
        <div className="homeBodyTitle">Categorize and preview your links</div>
        <div className="homeBodySubTitle">Organize and manage your saved links with ease</div>
        <div className="homeBodyBtn">Get Started</div>
        </div>
            <img src={HomePageImage} alt="HomeLogo" width={"50%"} style={{borderRadius:"10px"}} />
    </div>
    </>
  )
};

export default HomePage;