"use client";

import Location from "../location";
import Guests from "../guest-button";
import Searching from "../search-button";
import { useFilterContext } from "@/Context";
import { Drawer, Box } from "@mui/material";

const items = (
  <>
    <Location />
    <Guests />
    <Searching />
  </>
);

const boxClose = {
  display: "flex",
  width: "297px",
  height: "55px",
  top: "32px",
  bottom: "32px",
  background: "#FFFFFF",
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  justifyContent: "space-around",
  alignItems: "center",
};

const boxOpen = {
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "1248px",
  marginTop: "3.5em",
  background: " #FFFFFF",
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  justifyContent: "center",
};

const Searchbar = () => {
  const { open, setOpen }: any = useFilterContext();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        cursor: "pointer",
        alignItems: "center",
      }}
    >
      <div onClick={() => setOpen(true)}>
        <div style={boxClose}>{items}</div>
      </div>
      <div>
        <Drawer anchor="top" open={open} onClose={() => setOpen(!open)}>
          <Box height="460px" margin="auto">
            <span style={boxOpen}>{items}</span>
          </Box>
        </Drawer>
      </div>
    </div>
  );
};

export default Searchbar;
