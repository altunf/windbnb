"use client";
import { useFilterContext } from "@/context";
import SearchIcon from "@mui/icons-material/Search";

import { muli700 } from "@/styles/fonts";
import "./style.css";

const Searching = () => {
  const { search, open, setOpen }: any = useFilterContext();

  return (
    <div onClick={search}>
      {open ? (
        <button
          onClick={() => setOpen(false)}
          className={`${muli700.className} search-open`}
        >
          <SearchIcon /> Search
        </button>
      ) : (
        <SearchIcon className="search-closed" />
      )}
    </div>
  );
};

export default Searching;
