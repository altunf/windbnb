import React from "react";
import Logo from "../logo";
import Searchbar from "../searchbar";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "70.7%",
      }}
    >
      <Logo />
      <Searchbar />
    </div>
  );
};

export default Header;
