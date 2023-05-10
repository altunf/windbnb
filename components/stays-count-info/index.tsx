"use client";
import React from "react";
import { Typography } from "@mui/material";
import { useFilterContext } from "@/Context";
import "./style.css";
import { montserrat500, montserrat700 } from "@/styles/fonts";

const StaysCountInfo = () => {
  const { lastFilter }: any = useFilterContext();
  return (
    <div className="stays-count-info">
      <Typography sx={{ fontSize: "24px" }} className={montserrat700.className}>
        <b>Stays in Finland</b>
      </Typography>
      <Typography
        sx={{ fontSize: "14px", color: "#4f4f4f" }}
        className={montserrat500.className}
      >
        {lastFilter.length >= 12 ? "12+" : lastFilter.length} stays
      </Typography>
    </div>
  );
};

export default StaysCountInfo;
