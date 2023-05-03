"use client";
import { useFilterContext } from "@/Context";
import SearchIcon from "@mui/icons-material/Search";

const Searching = () => {
  const { search, open, setOpen }: any = useFilterContext();

  const stylingSearch2 = {
    display: "flex",
    width: "127px",
    height: "48px",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    background: "rgba(235, 87, 87, 0.9)",
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
    border: "none",
    borderRadius: "16px",
    cursor: "pointer",
    fontSize: "14px",
  };
  const stylingSearch1 = {
    color: "red",
    right: "7.84%",
    top: "4.68%",
    bottom: "93.76%",
    cursor: "pointer",
  };
  return (
    <div onClick={search}>
      {open ? (
        <button onClick={() => setOpen(false)} style={stylingSearch2}>
          <SearchIcon /> Search
        </button>
      ) : (
        <SearchIcon style={stylingSearch1} />
      )}
    </div>
  );
};

export default Searching;
