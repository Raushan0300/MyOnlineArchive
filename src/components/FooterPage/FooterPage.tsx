import "./FooterPage.css";
import instagramLogo from "./FooterImage/instagram.png";
import linkedinLogo from "./FooterImage/linkedin-logo.png";
import twitterLogo from "./FooterImage/twitter.png";

const FooterPage = () => {
  return (
    <div className="footerContainer">
        <div>
            <div className="footerTitle">MyOnlineArchive</div>
            <div className="footerSubtitle">Efficient Link Storage and Preview Tool</div>
            <div className="footerConnect">Connect with us:</div>
            <div className="footerLogo">
                <img src={instagramLogo} alt="instagram" width={"24px"} />
                <img src={linkedinLogo} alt="linkedin" width={"24px"} />
                <img src={twitterLogo} alt="twitter" width={"24px"} />
            </div>
        </div>
    </div>
  )
};

export default FooterPage;