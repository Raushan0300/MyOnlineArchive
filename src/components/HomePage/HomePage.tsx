import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import HomePageImage from "./HomePageImage/Designer.png";

const HomePage = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="homeHeader">
        <div className="homeHeaderTitle">MyOnlineArchive</div>
        <div className="homeHeaderBtn" onClick={()=>{navigate("/login")}}>Get Started</div>
      </div>
      <div className="homeBody">
        <div>
          <div className="homeBodyTitle">Categorize and preview your links</div>
          <div className="homeBodySubTitle">
            Organize and manage your saved links with ease
          </div>
          <div className="homeBodyBtn" onClick={()=>{navigate("/login")}}>Get Started</div>
        </div>
        <img
          src={HomePageImage}
          alt="HomeLogo"
          width={"50%"}
          style={{ borderRadius: "10px" }}
        />
      </div>
    </>
  );
};

export default HomePage;
