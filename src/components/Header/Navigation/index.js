import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <Button className="allCatTab align-items-center d-flex justify-content-between">
              <span className="icon1 mr-2">
                <IoIosMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2 ml-2">
                <FaAngleDown />
              </span>
            </Button>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline w-100">
              <li className="list-inline-item ml-auto">
                <Link to="/"><Button>Home</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Fashion</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Electronic</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Bakery</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>grocery</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Mobiles</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Blog</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Contact Us</Button></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
