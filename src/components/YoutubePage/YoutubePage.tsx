import { useEffect, useState } from "react";
import "./YoutubePage.css";
import { getData } from "../../config/config";

const YoutubePage = () => {
    const [ytData, setYtData] = useState<any>([{}]);

    const id = localStorage.getItem("id");

    useEffect(()=>{
        const handleView = async () => {
            const response = await getData("getyt", { id });
            const data = Array.isArray(response) ? response : [response];
            setYtData(data);
            console.log(ytData);
          };
            handleView();

    },)
  return (
    <div className="mapDiv">
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
      </div>
  )
};

export default YoutubePage;