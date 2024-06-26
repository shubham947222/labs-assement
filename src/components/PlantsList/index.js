import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PlantList() {
  const navigate = useNavigate();

  const [plantList, setPlantList] = useState([]);

  useEffect(() => {
    fetchPlants();
  }, []);
  const fetchPlants = () => {
    axios
      .get(
        "https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/"
      )
      .then((res) => {
        console.log(res?.data, "plant data");
        setPlantList(res?.data);
      });
  };
  return (
    <div
      // className="d-flex justify-content-center align-items-center"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      {plantList?.map((each) => (
        <div
          key={each?.id}
          className="px-2 my-4"
          style={{
            width: "280px",
            background: "#B0EAD5",
            borderRadius: "16px",
            position: "relative",
            // marginTop: "15px",
            cursor: "pointer",
          }}
          onClick={() =>
            navigate("/plant", {
              state: { plantInfo: each },
            })
          }
        >
          <div
            style={{
              position: "absolute",
              right: "-8%",
              top: "-40%",
            }}
          >
            <img width={116} src={each?.image} />
          </div>
          <p>
            <b>{each?.category}</b>
          </p>
          <h2>
            <b>{each?.name}</b>
          </h2>
          <div className="d-flex ">
            <p>
              <b>$ {each?.price}</b>
            </p>
            <p>🖤</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlantList;
