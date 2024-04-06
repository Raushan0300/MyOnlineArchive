import "./Dashboard.css";
import ytIcon from "./DashboardImages/youtube.png";
import igIcon from "./DashboardImages/instagram.png";
import xIcon from "./DashboardImages/twitter.png";
import { useState } from "react";
// import { postData } from "../../config/config";
import axios from "axios";

const Dashboard = () => {
  const [youtube, setYoutube] = useState(false);
  const [add, setAdd] = useState(false);
  const [link, setLink] = useState("");

  const handleAdd=()=>{
    const response = axios.post("http://localhost:8000/add", {youtube:link}, {});
    console.log(response);
  };

  const handleView=()=>{
    const response = axios.get("http://localhost:8000/getyt");
    console.log(response);
  }
  return (
    <>
    <div className="dashboardContainer">

      <div className="dashboardCard" onClick={()=>{setYoutube(!youtube)}}>
        <img src={ytIcon} alt="youtube" width={"50%"} />
        <div className="dashboardCardTitle">YouTube</div>
      </div>

      <div className="dashboardCard">
        <img src={igIcon} alt="instagram" width={"50%"} />
        <div className="dashboardCardTitle">Instagram</div>
      </div>

      <div className="dashboardCard">
        <img src={xIcon} alt="twitter" width={"50%"} />
        <div className="dashboardCardTitle">Twitter</div>
      </div>

    </div>
    {youtube && <div className="dashboardCardContent">
          <div style={{cursor:"pointer"}} onClick={()=>{setAdd(!add)}}>Add</div>
          <div style={{cursor:"pointer"}} onClick={()=>{handleView()}}>View</div>
          </div>}

          {add && <div>
            <input type="text" value={link} onChange={(e)=>{setLink(e.target.value)}} />
            <button onClick={()=>{handleAdd()}}>Save</button>
            </div>}

            <iframe width="500" height="300" src="https://www.youtube.com/embed/dKD4a_sv69o" title="OpenDevin Tutorial (Open-Source Devin) - Build Entire Apps From a Single Prompt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </>
  );
};

export default Dashboard;