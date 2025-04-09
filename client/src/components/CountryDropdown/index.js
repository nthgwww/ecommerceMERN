import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaAngleDown } from "react-icons/fa";
import DialogTitle from "@mui/material/DialogTitle";
import { Dialog } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";
import { IoGitMerge } from "react-icons/io5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);

  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext)

  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setIsOpenModal(false);
    context.setSelectedCountry(country);
  }

  useEffect(() => {
    setCountryList(context.countryList); 
  },[])

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if(keyword!==""){
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      })
    setCountryList(list); 

    }else{
      setCountryList(context.countryList); 
    }
  }

  return (
    <div>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{context.selectedCountry!=="" ? context.selectedCountry.length>10 ? context.selectedCountry.substr(0,10) + '...' : context.selectedCountry : 'Select a Location'}</span>
        </div>
        <span className="ml-auto">
          {/* <faAngleDown/> */}
          <FaAngleDown className="icon" />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area</p>
        <Button className="closeBtn" onClick={() => setIsOpenModal(false)}>
          <IoMdClose />
        </Button>

        <div className="headerSearch w-100">
          <input type="text" placeholder="Search your area...." onChange={filterList}/>
          <Button className="circle">
            <FaSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button onClick={()=>selectCountry(index, item.country)} className={`${selectedTab===index ? 'active' : ''}`}>{item.country}</Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </div>
  );
};

export default CountryDropdown;
