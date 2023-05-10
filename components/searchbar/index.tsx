"use client";

import Location from "../location";
import Guests from "../guest-button";
import Searching from "../search-button";
import { useFilterContext } from "@/Context";
import { Drawer, Box } from "@mui/material";

import "./style.css";

const items = (
  <>
    <Location />
    <Guests />
    <Searching />
  </>
);

const Searchbar = () => {
  const { open, setOpen }: any = useFilterContext();

  return (
    <div className="searchbar">
      <div onClick={() => setOpen(true)}>
        <div className="box-closed">{items}</div>
      </div>
      <div>
        <Drawer anchor="top" open={open} onClose={() => setOpen(!open)}>
          <Box height="460px" margin="auto">
            <span className="box-open">{items}</span>
          </Box>
        </Drawer>
      </div>
    </div>
  );
};

export default Searchbar;
