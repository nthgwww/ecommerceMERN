import React from "react";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";
// import "./style.css";

const SearchBox = () => {
  return (
    <div className="headerSearch ml-3 mr-3">
      <input type="text" placeholder="Search for products...." />
      <Button className="circle">
        <FaSearch />
      </Button>
    </div>
  );
};

export default SearchBox;
