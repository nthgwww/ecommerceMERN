import React, { useState } from "react";
import Button from "@mui/material/Button";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaAngleDown } from "react-icons/fa";
import DialogTitle from "@mui/material/DialogTitle";
import { Dialog } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">India</span>
        </div>
        <span className="ml-auto">
          {/* <faAngleDown/> */}
          <FaAngleDown className="icon" />
        </span>
      </Button>

      <Dialog open={isOpenModal} className="locationModal" TransitionComponent={Transition}>
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area</p>
        <Button className="closeBtn" onClick={() => setIsOpenModal(false)}>
          <IoMdClose />
        </Button>

        <div className="headerSearch w-100">
      <input type="text" placeholder="Search your area...." />
      <Button className="circle">
        <FaSearch />
      </Button>
    </div>
    <ul className="countryList mt-3">
        <li><Button onClick={() => setIsOpenModal(false)}>India</Button></li>
        <li><Button onClick={() => setIsOpenModal(false)}>Pakistan</Button></li>
        <li><Button onClick={() => setIsOpenModal(false)}>Vietnam</Button></li>
        <li><Button>India</Button></li>
        <li><Button>Pakistan</Button></li>
        <li><Button>Vietnam</Button></li>
        <li><Button>India</Button></li>
        <li><Button>Pakistan</Button></li>
        <li><Button>Vietnam</Button></li>
        <li><Button>India</Button></li>
        <li><Button>Pakistan</Button></li>
        <li><Button>Vietnam</Button></li>
      </ul>
      </Dialog>

    </div>
  );
};

export default CountryDropdown;
