"use client";
import "./style.css";
import React, { useState } from "react";
import { useFilterContext } from "@/Context";
import { Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const Location = () => {
  const {
    setSelectedLocation,
    open,
    selectedItem,
    setSelectedItem,
    findCity,
    cityList,
  }: any = useFilterContext();

  const [openLocations, setOpenLocations] = useState(false);

  const myStyle = open
    ? !openLocations
      ? "style-location"
      : "style-location2"
    : "style-location3";

  return (
    <div>
      <div
        className={myStyle}
        onClick={() => open && setOpenLocations(!openLocations)}
      >
        <Typography
          variant="body1"
          sx={{ marginLeft: "2em", marginTop: "1em", fontSize: "9px" }}
        >
          {open && "LOCATION"}
        </Typography>
        <Typography sx={{ fontSize: "14px", marginLeft: "18px" }}>
          {selectedItem ? (
            <span style={{ fontSize: "14px" }}>{findCity.label}, Finland</span>
          ) : (
            <span style={{ color: "#BDBDBD", fontSize: "14px" }}>
              Add location
            </span>
          )}
        </Typography>
      </div>
      <div>
        {openLocations &&
          cityList.map((item: any, index: any) => {
            const handleItemClick = (id: any) => {
              selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);

              setSelectedLocation(item.label);
            };

            return (
              <div
                key={index}
                id={item.id}
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                  handleItemClick(e.currentTarget.id)
                }
              >
                <div
                  onClick={() => setOpenLocations(false)}
                  className="dropdown-menu"
                >
                  <PlaceIcon sx={{ fontSize: "16px", marginRight: "10px" }} />
                  {item.label + ", Finland"}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Location;
