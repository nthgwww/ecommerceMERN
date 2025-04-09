import { Button, Rating } from '@mui/material'
import React from 'react'
import { TfiFullscreen } from 'react-icons/tfi'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'

const ProductItem = () => {
  return (
    <div>
        <div className="item productItem">
                            <div className="imgWrapper">
                              <img
                                src="https://danielwellingtons.com.vn/wp-content/uploads/2025/03/z6419853502301_012a4814f1e3d60e17af3071af364414-300x300.jpg"
                                className="w-100"
                              />
                              <span className="badge badge-primary">28%</span>
                              <div className="actions">
                                <Button>
                                  <TfiFullscreen/>
                                </Button>
                                <Button>
                                  <IoMdHeartEmpty/>
                                </Button>
                              </div>
        
                            </div>
                            <div className="info">
                              <h4>Danielwellingtons Ring</h4>
                              <span className="text-success d-block">In Stock</span>
                              <Rating
                                className="mt-2 mb-2"
                                name="read-only"
                                value={5}
                                readOnly
                                size="small"
                              />
                              <div className="d-flex">
                                <span className="oldPrice">$20.00</span>
                                <span className="netPrice text-danger ml-3">$14.00</span>
        
                              </div>
                            </div>
                          </div>
    </div>
  )
}

export default ProductItem