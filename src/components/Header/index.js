import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.webp";
import Button from "@mui/material/Button";
import CountryDropdown from "../CountryDropdown";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-gray">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19 </b>epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="logo" className="logo" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />

                {/* Header Search Start Here */}
                <div className="headerSearch ml-3 mr-3">
                  <input type="text" placeholder="Search for products...." />
                  <Button className="circle">
                    <FaSearch />
                  </Button>
                </div>
                {/* Header Search End Here */}

                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3">
                    <FiUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price ml-2">$3.29</span>
                    <div className="positon-relative ml-2">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
