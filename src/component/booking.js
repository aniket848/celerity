import React from "react";
import style from "./booking.module.css";
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
} from "react-icons/bs";
import { FaShip } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { BsAirplane } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";


const Booking = () => {
  return (
    <div className={style.booking}>
      <div className={style.list}>
        <BsFill1CircleFill className={style.circle} />
        <BsFill2CircleFill className={style.circle} />
        <BsFill3CircleFill className={style.circle} />
        <BsFill4CircleFill className={style.circle} style={{fill:'#868686'}}/>
        <hr className={style.line}></hr>
      </div>

      <div className={style.form}>
        <h3 className={style.formText}>
          <CiLocationOn /> &nbsp;&nbsp;Delhi, 110003
        </h3>
        <h3 className={style.formText}>
          <CiLocationOn /> &nbsp;&nbsp;Shanghai 200080
        </h3>
        <h3 className={style.formText}>
          |&nbsp;&nbsp;&nbsp;&nbsp; <SlCalender /> &nbsp;&nbsp; 13 April 2023
        </h3>
        <h3 className={style.formText}>
          |&nbsp;&nbsp;&nbsp;&nbsp; <FaShip /> &nbsp;&nbsp;114.21KG - AIR
        </h3>
        <HiOutlinePencilAlt className={style.formpencil}/>
      </div>

      <hr className={style.bookingline} />
      <div className={style.body}>
        <div className={style.left}>
          <h3 className={style.listheading}>3 Top Quote (3 in Total)</h3>
          <ul className={style.bookinglist}>
            <li className={style.bookingitem}>
              <h3 className={style.itemtext}>Filters</h3>
              <RiArrowDropDownLine className={style.itemsticker} />
            </li>
            <li className={style.bookingitem}>
              <h3 className={style.itemtext}>Price</h3>
              <RiArrowDropDownLine className={style.itemsticker} />
            </li>
            <li className={style.bookingitem}>
              <h3 className={style.itemtext}>Modes</h3>
              <RiArrowDropDownLine className={style.itemsticker} />
            </li>
            <li className={style.bookingitem}>
              <h3 className={style.itemtext}>Seller</h3>
              <RiArrowDropDownLine className={style.itemsticker} />
            </li>
          </ul>
        </div>
        <div className={style.right}>
          <div className={style.toplist}>
            <h3 className={style.listtext}>Best Value 5-5 days. $3,121</h3>
            <h3 className={style.listtext1}>Quickest 5-5 days. $3,121</h3>
            <h3 className={style.listtext1}>Cheapest 5-5 days. $3,121</h3>
          </div>

          <div className={style.cardbox}>
            <div className={style.card}>
              <div className={style.cardLeft}>
                <div className={style.cardtoptext}>
                  <h3 className={style.value}>Best Value</h3>
                  <h3 className={style.time}>
                    <span className={style.express}>Express</span>
                    &nbsp;&nbsp;|&nbsp;&nbsp;Est. 5 days
                  </h3>
                </div>
                <div className={style.rate}>
                  <CiLocationOn />
                  <h3 className={style.smalltext}>110003, Delhi</h3>
                  <hr className={style.cardLine} />
                  <BsAirplane />
                  <hr className={style.cardLine} />
                  <CiLocationOn />
                  <h3 className={style.smalltext}>200080, Shanghai</h3>
                </div>
                <div className={style.rating}>
                  <div className={style.image}></div>
                  <h4 className={style.smallname}>Primetime Worldwide</h4>
                  <div className={style.star}>
                    <AiFillStar style={{ fill: "#9747FF" }} />
                    <AiFillStar style={{ fill: "#9747FF" }} />
                    <AiFillStar style={{fill:'#9747FF'}}/>
                    <AiFillStar style={{fill:'#9747FF'}}/>
                    <AiOutlineStar style={{fill:'#9747FF'}}/>
                  </div>
                </div>
              </div>
              <div className={style.cardRight}>
                <hr className={style.verticalLine}></hr>
                <div className={style.rightText}>
                  <h2 className={style.textrate}>$ 3,982.63</h2>
                  <button className={style.rightButton}>Select</button>
                  <a className={style.anchor} href="#">
                    View details
                  </a>
                </div>
              </div>
            </div>

            <div className={style.card}>
              <div className={style.cardLeft}>
                <div className={style.cardtoptext}>
                  <h3 className={style.value1}>Eco</h3>
                  <h3 className={style.time}>
                    <span className={style.express}>Express</span>
                    &nbsp;&nbsp;|&nbsp;&nbsp;Est. 5 days
                  </h3>
                </div>
                <div className={style.rate}>
                  <CiLocationOn />
                  <h3 className={style.smalltext}>110003, Delhi</h3>
                  <hr className={style.cardLine} />
                  <BsAirplane />
                  <hr className={style.cardLine} />
                  <CiLocationOn />
                  <h3 className={style.smalltext}>200080, Moscow</h3>
                </div>
                <div className={style.rating}>
                  <div className={style.image}></div>
                  <h4 className={style.smallname}>Primetime Worldwide</h4>
                  <div className={style.star}>
                    <AiFillStar style={{ fill: "#9747FF" }} />
                    <AiFillStar style={{ fill: "#9747FF" }} />
                    <AiFillStar style={{fill:'#9747FF'}}/>
                    <AiOutlineStar style={{fill:'#9747FF'}}/>
                    <AiOutlineStar style={{fill:'#9747FF'}}/>
                  </div>
                </div>
              </div>
              <div className={style.cardRight}>
                <hr className={style.verticalLine}></hr>
                <div className={style.rightText}>
                  <h2 className={style.textrate}>$ 7,982.63</h2>
                  <button className={style.rightButton}>Select</button>
                  <a className={style.anchor} href="#">
                    View details
                  </a>
                </div>
              </div>
            </div>

            <div className={style.card}>
              <div className={style.cardLeft}>
                <div className={style.cardtoptext}>
                  <h3 className={style.value}>Best Value</h3>
                  <h3 className={style.time}>
                    <span className={style.express}>Express</span>
                    &nbsp;&nbsp;|&nbsp;&nbsp;Est. 7 days
                  </h3>
                </div>
                <div className={style.rate}>
                  <CiLocationOn />
                  <h3 className={style.smalltext}>110003, Mumbai</h3>
                  <hr className={style.cardLine} />
                  <BsAirplane />
                  <hr className={style.cardLine} />
                  <CiLocationOn />
                  <h3 className={style.smalltext}>200080, Shanghai</h3>
                </div>
                <div className={style.rating}>
                  <div className={style.image}></div>
                  <h4 className={style.smallname}>Primetime Worldwide</h4>
                  <div className={style.star}>
                    <AiFillStar style={{ fill: "#9747FF" }} />
                    <AiFillStar style={{ fill: "#9747FF" }} />
                    <AiFillStar style={{fill:'#9747FF'}}/>
                    <AiFillStar style={{fill:'#9747FF'}}/>
                    <AiOutlineStar style={{fill:'#9747FF'}}/>
                  </div>
                </div>
              </div>
              <div className={style.cardRight}>
                <hr className={style.verticalLine}></hr>
                <div className={style.rightText}>
                  <h2 className={style.textrate}>$ 6,762.63</h2>
                  <button className={style.rightButton}>Select</button>
                  <a className={style.anchor} href="#">
                    View details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
