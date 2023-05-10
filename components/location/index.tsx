"use client";
import "./style.css";
import React, { useState } from "react";
import { useFilterContext } from "@/context";
import { Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { muli800, muli400, muli } from "@/styles/fonts";

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
          {open && <span className={muli800.className}>LOCATION</span>}
        </Typography>
        <Typography sx={{ fontSize: "14px", marginLeft: "18px" }}>
          {selectedItem ? (
            <span className={muli.className} style={{ fontSize: "14px" }}>
              {findCity.label}, Finland
            </span>
          ) : (
            <span
              className={muli400.className}
              style={{ color: "#BDBDBD", fontSize: "14px" }}
            >
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
                  <span className={muli400.className}>
                    {" "}
                    {item.label + ", Finland"}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Location;
