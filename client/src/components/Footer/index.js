import React from 'react'
import { LuShirt } from 'react-icons/lu'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaPercentage } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='topInfo row'>
                <div className='col d-flex align-items-center'>
                    <LuShirt />
                    <span className=''>Everyday fresh products</span>
                </div>
                <div className='col d-flex align-items-center'>
                    <CiDeliveryTruck />
                    <span className=''>Free delivery for order over $70</span>
                </div>
                <div className='col d-flex align-items-center'>
                    <FaPercentage />
                    <span className=''>Daily Mega Discount %</span>
                </div>
                <div className='col d-flex align-items-center'>
                    <MdOutlinePriceChange />
                    <span className=''>Best Price on the market</span>
                </div>
            </div>

            <div className='row mt-5 linksWrap'>
                <div className='col'>
                    <h5>FRUIT & VEGETABLES</h5>
                    <ul>
                        <li>
                            <Link to='#'>FRUIT & VEGETABLES</Link>
                        </li>
                        <li>
                            <Link to='#'>Herbs & Seasonings</Link>
                        </li>
                        <li>
                            <Link to='#'>Fresh Fruits</Link>
                        </li>
                        <li>
                            <Link to='#'>Cut & Sprouts</Link>
                        </li>
                        <li>
                            <Link to='#'>Exotic Fruits & Veggies</Link>
                        </li>
                        <li>
                            <Link to='#'>Package Produce</Link>
                        </li>
                        <li>
                            <Link to='#'>Party Trays</Link>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <h5>FRUIT & VEGETABLES</h5>
                    <ul>
                        <li>
                            <Link to='#'>FRUIT & VEGETABLES</Link>
                        </li>
                        <li>
                            <Link to='#'>Herbs & Seasonings</Link>
                        </li>
                        <li>
                            <Link to='#'>Fresh Fruits</Link>
                        </li>
                        <li>
                            <Link to='#'>Cut & Sprouts</Link>
                        </li>
                        <li>
                            <Link to='#'>Exotic Fruits & Veggies</Link>
                        </li>
                        <li>
                            <Link to='#'>Package Produce</Link>
                        </li>
                        <li>
                            <Link to='#'>Party Trays</Link>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <h5>FRUIT & VEGETABLES</h5>
                    <ul>
                        <li>
                            <Link to='#'>FRUIT & VEGETABLES</Link>
                        </li>
                        <li>
                            <Link to='#'>Herbs & Seasonings</Link>
                        </li>
                        <li>
                            <Link to='#'>Fresh Fruits</Link>
                        </li>
                        <li>
                            <Link to='#'>Cut & Sprouts</Link>
                        </li>
                        <li>
                            <Link to='#'>Exotic Fruits & Veggies</Link>
                        </li>
                        <li>
                            <Link to='#'>Package Produce</Link>
                        </li>
                        <li>
                            <Link to='#'>Party Trays</Link>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <h5>FRUIT & VEGETABLES</h5>
                    <ul>
                        <li>
                            <Link to='#'>FRUIT & VEGETABLES</Link>
                        </li>
                        <li>
                            <Link to='#'>Herbs & Seasonings</Link>
                        </li>
                        <li>
                            <Link to='#'>Fresh Fruits</Link>
                        </li>
                        <li>
                            <Link to='#'>Cut & Sprouts</Link>
                        </li>
                        <li>
                            <Link to='#'>Exotic Fruits & Veggies</Link>
                        </li>
                        <li>
                            <Link to='#'>Package Produce</Link>
                        </li>
                        <li>
                            <Link to='#'>Party Trays</Link>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <h5>FRUIT & VEGETABLES</h5>
                    <ul>
                        <li>
                            <Link to='#'>FRUIT & VEGETABLES</Link>
                        </li>
                        <li>
                            <Link to='#'>Herbs & Seasonings</Link>
                        </li>
                        <li>
                            <Link to='#'>Fresh Fruits</Link>
                        </li>
                        <li>
                            <Link to='#'>Cut & Sprouts</Link>
                        </li>
                        <li>
                            <Link to='#'>Exotic Fruits & Veggies</Link>
                        </li>
                        <li>
                            <Link to='#'>Package Produce</Link>
                        </li>
                        <li>
                            <Link to='#'>Party Trays</Link>
                        </li>
                    </ul>
                </div>

            </div>
            
            <div className='copyright mt-3 pt-3 pb-3 d-flex'>
                <p className='mb-0'>Copyright 2025. All rights reserved. Powered by TommyHo.</p>
                <ul className='list list-inline ml-auto mb-0'>
                    <li className='list-inline-item'>
                       
                        <Link to='#'>
                        <FaFacebook />
                        </Link>
                    </li>
                    <li className='list-inline-item'>
                        
                        <Link to='#'><FaTwitter /></Link>
                    </li>
                    <li className='list-inline-item'>
                        
                        <Link to='#'><FaInstagram /></Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer