import React from "react";
import { useLocation } from "react-router-dom";

function PlantInfo() {
  const location = useLocation();
  const data = location.state?.plantInfo;
  console.log(data, "data");
  return (
    <div className="d-flex justify-content-center align-item-center">
      <div
        className="d-flex flex-column justify-content-center align-item-center"
        style={{
          width: "280px",
          background: "#B0EAD5",
          borderRadius: "16px",
          //   position: "relative",
          cursor: "pointer",
          padding: "5px",
        }}
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          <p>Air Purifier</p>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              background: "#ffffff",
              borderRadius: "15px",
              width: "50px",
              height: "15px",
              padding: 5,
            }}
          >
            <p>
              <i class="fa-solid fa-star"></i>
            </p>
            <p>4.8</p>
          </div>
        </div>
        <h2 className="text-left">{data?.name}</h2>
        <div className="d-flex justify-content-between align-items-center w-100">
          <p>
            <b>{data?.price}</b>
          </p>
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <img
              style={{
                position: "absolute",
                right: "-20%",
              }}
              src={data?.image}
              width={"227px"}
              height={"250px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantInfo;

// {
//     "id": 1,
//     "name": "Pepperomia",
//     "category": "Air Purifier",
//     "price": 400,
//     "size": "4\" h",
//     "water": "250ml",
//     "light": "30-40%",
//     "fertilizer": "250gm",
//     "bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
//     "image": "https://i.imgur.com/4ucOXpZ.png"
//   },
