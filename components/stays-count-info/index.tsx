"use client";
import React from "react";
import { Typography } from "@mui/material";
import { useFilterContext } from "@/Context";

const StaysCountInfo = () => {
  const { lastFilter }: any = useFilterContext();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5em",
        marginRight: "5em",
      }}
    >
      <Typography sx={{ fontSize: "24px" }}>
        <b>Stays in Finland</b>
      </Typography>
      <Typography sx={{ fontSize: "14px", color: "#4f4f4f" }}>
        {lastFilter.length >= 12 ? "12+" : lastFilter.length} stays
      </Typography>
    </div>
  );
};

export default StaysCountInfo;
