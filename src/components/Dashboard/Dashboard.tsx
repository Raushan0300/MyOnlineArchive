import "./Dashboard.css";
import ytIcon from "./DashboardImages/youtube.png";
import igIcon from "./DashboardImages/instagram.png";
import xIcon from "./DashboardImages/twitter.png";
import { useState } from "react";
import { postData } from "../../config/config";
import { Dialog } from "@mui/material";
import AddDialog from "../AddDialog/AddDialog";

const Dashboard = () => {
  // const [youtube, setYoutube] = useState(false);
  // const [add, setAdd] = useState(false);
  const [link, setLink] = useState("");

  const [openDialog, setOpenDialog] = useState(false);

  // const [compval, setCompval] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth < 700) {
  //     setCompval(true);
  //   }
  // }, []);

  const id = localStorage.getItem("id");

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAdd = async () => {
    const embedLink = link.replace("watch?v=", "embed/");
    const response = await postData("add", { youtube: embedLink, id });
    console.log(response);
  };

  return (
    <div className="dashboardMainDiv">
      <div className="dashboardContainer">
        <div
          className="dashboardCard"
          onClick={() => {
            setOpenDialog(true);
          }}>
          <img
            src={ytIcon}
            alt="youtube"
            width={"50%"}
          />
          <div className="dashboardCardTitle">YouTube</div>
        </div>

        <div className="dashboardCard">
          <img
            src={igIcon}
            alt="instagram"
            width={"50%"}
          />
          <div className="dashboardCardTitle">Instagram</div>
        </div>

        <div className="dashboardCard">
          <img
            src={xIcon}
            alt="twitter"
            width={"50%"}
          />
          <div className="dashboardCardTitle">Twitter</div>
        </div>
      </div>
      {/* {youtube && (
        <div className="dashboardCardContent">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setAdd(!add);
            }}>
            Add
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleView();
            }}>
            View
          </div>
        </div>
      )} */}
      {/* {add && (
        <div>
          <input
            type="text"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
          <button
            onClick={() => {
              handleAdd();
            }}>
            Save
          </button>
        </div>
      )} */}
      {/* <div className="mapDiv">
        {ytData[0]?.youtube?.map((item: any) => {
          return (
            <iframe
              width="400"
              height="250"
              src={item}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          );
        })}
      </div> */}
      
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            "& .MuiDialogTitle-root": {
              padding: "16px",
              width: "100%",
              maxWidth: window.innerWidth / 2,
            },
          },
        }}
        open={openDialog}>
        <AddDialog
          handleCloseDialog={handleCloseDialog}
          handleAdd={handleAdd}
          link={link}
          setLink={setLink}></AddDialog>
      </Dialog>
    </div>
  );
};

export default Dashboard;
