import { useAuth0 } from "@auth0/auth0-react";
import "./HomePage.css";
import HomePageImage from "./HomePageImage/Designer.png";

const HomePage = () => {
  const {loginWithRedirect} = useAuth0();
  const {logout} = useAuth0();
  return (
    <>
    <div className="homeHeader">
        <div className="homeHeaderTitle">MyOnlineArchive</div>
        <div className="homeHeaderBtn" onClick={()=>{loginWithRedirect()}}>Get Started</div>
    </div>
    <div className="homeBody">
        <div>
        <div className="homeBodyTitle">Categorize and preview your links</div>
        <div className="homeBodySubTitle">Organize and manage your saved links with ease</div>
        <div className="homeBodyBtn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Get Started</div>
        </div>
            <img src={HomePageImage} alt="HomeLogo" width={"50%"} style={{borderRadius:"10px"}} />
    </div>
    </>
  )
};

export default HomePage;