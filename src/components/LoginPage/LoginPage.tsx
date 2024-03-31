import { useState } from "react";
import "./LoginPage.css";
import { postData } from "../../config/config";
import { Dialog } from "@mui/material";
import Indicator from "../Indicator";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alertMessage, setAlertMessage] = useState("");

  const handleLogin = async() => {
    const response = await postData("login", {email, password});
    if(response.message){
      setAlertMessage(response.message);
    } else{
      setAlertMessage(response.error);
    }
  };

  const [openDialog, setOpenDialog] = useState(false);
  const handleDialog=async()=>{
    setOpenDialog(true);
    await handleLogin();
    setOpenDialog(false);
    navigate("/dashboard");
  }

  return (
    <>
    <div>
      <div className="homeHeader">
        <div className="homeHeaderTitle">MyOnlineArchive</div>
      </div>
      <div className="loginBody">
        <div className="loginBodyTitle">Login</div>
        <div className="loginBodySubTitle">
          Enter your credentials to access your account
        </div>
        <div className="loginBodyForm">
          <input
            type="email"
            placeholder="Email"
            className="loginBodyInput"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <input
            type="password"
            placeholder="Password"
            className="loginBodyInput"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <button className="loginBodyBtn" onClick={()=>{handleDialog()}}>Next</button>
          {/* <div className="loginPText" onClick={()=>{setIsRegister(!isRegister)}}>{isRegister?"Register":"Login"}</div> */}
        </div>
      </div>
    </div>
    <Dialog sx={{
      "& .MuiDialog-paper": {
        "& .MuiDialogTitle-root": {
          padding: "16px",
          width:"100%",
          maxWidth: window.innerWidth/2
        },
      },
    }}
    open={openDialog}>
      <Indicator message={alertMessage}></Indicator>
    </Dialog>
    </>
  );
};

export default LoginPage;
