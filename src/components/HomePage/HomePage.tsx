import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import HomePageImage from "./HomePageImage/Designer.png";
import { useEffect, useState } from "react";

const HomePage = () => {
  const navigate=useNavigate();
  const [compval, setCompval] = useState<Boolean>(false);
  useEffect(()=>{
    setCompval(window.innerWidth<768);
  },[]);
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
          width={compval?"100%":"50%"}
          style={{ borderRadius: "10px" }}
        />
      </div>
    </>
  );
};

export default HomePage;
