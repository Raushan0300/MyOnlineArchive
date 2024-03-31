import { Digital } from "react-activity";
import "react-activity/dist/Digital.css";

const Indicator = (props:any) => {
    const {message} = props;
  return (
    <div>
        <Digital color="#727981" size={32} speed={1} animating={true} />
        <div style={{fontSize:"18px", padding:"5px"}}>{message}</div>
    </div>
  )
}

export default Indicator;