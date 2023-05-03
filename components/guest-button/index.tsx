"use client";
import "./style.css";
import { useFilterContext } from "@/Context";
import { Typography } from "@mui/material";
import { useState } from "react";

const Guests = () => {
  const { open, adult, setAdult, child, setChild, total }: any =
    useFilterContext();
  const [openGuests, setOpenGuests] = useState(false);

  const buttonStyle = { margin: "10px" };
  const myStyle = open
    ? !openGuests
      ? "style-guest"
      : "style-guest2"
    : "style-guest3";

  return (
    <div>
      <div
        className={myStyle}
        onClick={() => open && setOpenGuests(!openGuests)}
      >
        <Typography
          variant="body1"
          sx={{ marginLeft: "2em", marginTop: "1em", fontSize: "9px" }}
        >
          {open && "GUESTS"}
        </Typography>
        {total > 0 ? (
          <span style={{ fontSize: "14px", marginLeft: "18px" }}>
            {total} guests
          </span>
        ) : (
          <span
            style={{ color: "#BDBDBD", fontSize: "14px", marginLeft: "18px" }}
          >
            Add guests
          </span>
        )}
      </div>
      <div>
        {openGuests && (
          <div className="dropdown-menu2">
            <div>
              <div>Adults</div>
              <div style={{ color: "#BDBDBD", marginBottom: "1.5em" }}>
                Ages 13 or above
              </div>
              <button onClick={() => adult > 0 && setAdult(adult - 1)}>
                -
              </button>
              <span style={buttonStyle}>{adult}</span>
              <button onClick={() => setAdult(adult + 1)}>+</button>
            </div>
            <div>
              <div style={{ marginTop: "42px" }}>Children</div>
              <div style={{ color: "#BDBDBD", marginBottom: "1.5em" }}>
                Ages 12 - 2
              </div>
              <button onClick={() => child > 0 && setChild(child - 1)}>
                -
              </button>
              <span style={buttonStyle}>{child}</span>
              <button onClick={() => setChild(child + 1)}>+</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guests;
