import React from "react";
import style from "./listing.module.css";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
} from "react-icons/bs";
import { TbBuilding } from "react-icons/tb";
import { TfiMouseAlt } from "react-icons/tfi";
import { VscInbox } from "react-icons/vsc";
import { GiCrossMark } from "react-icons/gi";


const Listing = () => {
  return (
    <div className={style.listing}>
      <div className={style.list}>
        <BsFill1CircleFill className={style.circle} />
        <BsFill2CircleFill className={style.circle} />
        <BsFill3CircleFill className={style.circle} />
        <BsFill4CircleFill className={style.circle}  />
        <hr className={style.line}></hr>
      </div>
      <div className={style.info}>
        <div className={style.left}>
          <div className={style.booking}>
            <h3 className={style.bookingText}>Booking summary</h3>
            <div className={style.flight}>
              <div className={style.source}>
                <TbBuilding className={style.bookingsticker} />
                <h3 className={style.belowText}>Delhi, 110003 India</h3>
              </div>
              <div className={style.flightLine} />
              <div className={style.source}>
                <TbBuilding className={style.bookingsticker} />
                <h3 className={style.belowText}>Shanghai 200080, China</h3>
              </div>
            </div>
          </div>
          <div className={style.weight}>
            <h3 className={style.weightHeading}>Total Weight/Volume</h3>
            <TfiMouseAlt className={style.weightsticker} />
            <h2 className={style.bookingText}>114.21KG</h2>
          </div>
          <div className={style.load}>
            <h3 className={style.weightHeading} style={{textAlign:'left'}}>Load</h3>
            <div className={style.loadText}>
              <h1>1 X &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
              <div style={{textAlign:'center'}}>
                <VscInbox className={style.loadsticker} />
                <h3 className={style.loadpara}>Pallets</h3>
                <h3 className={style.loadpara}>230 X 140 X 120 CM</h3>
              </div>
            </div>
          </div>
          <div className={style.seller}>
            <h3 className={style.weightHeading} style={{textAlign:'left'}}>Seller: Primetime Worldwide</h3>
            <div className={style.sellerimage}>
            </div>
          </div>
          <div className={style.insurance}>
            <h1 className={style.insuranceText}><GiCrossMark className={style.insurancesticker}/>&nbsp;&nbsp;&nbsp;XCOVER.COM</h1>
          </div>
        </div>
        <div className={style.right}>
          <h2 className={style.priceheading}>Price details</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 className={style.priceText}>Seller’s Quote</h3>
            <h3 className={style.priceText}>$ 3,659.25</h3>
          </div>
          <hr className={style.priceLine} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 className={style.priceText}>Duties and taxes</h3>
            <h3 className={style.priceText}>Not Included</h3>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 className={style.priceText}>Insurance</h3>
            <h3 className={style.priceText}>$323.40</h3>
          </div>
          <hr className={style.priceLine} />
          <h3 className={style.priceText} style={{textAlign:'left'}}>
            Add a <span style={{ color: "#6F57E9" }}>promo code</span>
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 className={style.priceText}>Platform fee</h3>
            <h3 className={style.priceText}>$119.48</h3>
          </div>
          <hr className={style.priceLine} />
          <h1 className={style.pricemainText}>
            Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
            4,102.13
          </h1>
          <button className={style.priceButton}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
