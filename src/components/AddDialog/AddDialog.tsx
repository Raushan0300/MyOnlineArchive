import { useState } from "react";
import "./AddDialog.css";
import closeIcon from "./AddDialogImages/close.png";
import { useNavigate } from "react-router-dom";

const AddDialog = (props: any) => {
  const { handleCloseDialog, handleAdd, link, setLink } = props;

  const navigate = useNavigate();

  const [isAddLink, setIsAddLink] = useState(false);
  return (
    <div>
      {isAddLink ? (
        <div className="addDialogMainDiv">
          <div className="addDialogContainer">
            <img
              src={closeIcon}
              alt="close"
              className="closeIconImage"
              onClick={handleCloseDialog}
            />
            <div className="addDialogCard">
              <div className="addDialogCardTitle">Add a new link</div>
              <div className="addDialogCardSubTitle">
                Enter the link of the YouTube Video you want to add
              </div>
              <input
                type="text"
                placeholder="Link"
                className="addDialogCardInput"
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
              <button
                className="addDialogCardButton"
                onClick={handleAdd}>
                Add
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="addDialogMainDiv">
          <div className="addDialogContainer">
            <img
              src={closeIcon}
              alt="close"
              className="closeIconImage"
              onClick={handleCloseDialog}
            />
            <div className="addDialogCardTitle">YouTube</div>
            <button
              className="dialogAddBtn"
              onClick={() => {
                setIsAddLink(true);
              }}>
              Add Link
            </button>
            <button className="dialogAddBtn" onClick={()=>{navigate("/youtube")}}>View Added Link</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddDialog;
