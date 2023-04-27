import React from "react";
import style from "./search.module.css";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsGlobe} from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import { FaShip } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";


const SearchForm = () => {
  return (
    <div className={style.search}>
      <div className={style.top}>
        <h1 className={style.toptext}>
          Ship<span className={style.toptext2}>mate.</span>
        </h1>
        <div>
          <button className={style.topbutton1}>$</button>
          <button className={style.topbutton2}>Track shipment</button>
        </div>
      </div>
      <div className={style.heading}>
        <h1 className={style.mainHeading}>Hassle-Free Shipping Solutions</h1>
        <h2 className={style.secHeading}>
          Compare, book, and manage your freight across the world’s top
          logistics providers, all on one platform.
        </h2>
      </div>
      <div className={style.form}>
          <h3 className={style.formText}><CiLocationOn/> &nbsp;&nbsp;Origin, Port, City</h3>
          <h3 className={style.formText}><CiLocationOn/> &nbsp;&nbsp;Destination, Port, City</h3>
          <h3 className={style.formText}>|&nbsp;&nbsp;&nbsp;&nbsp; <SlCalender/> &nbsp;&nbsp; 13 April 2023</h3>
          <h3 className={style.formText}>|&nbsp;&nbsp;&nbsp;&nbsp; <FaShip/> &nbsp;&nbsp;Load</h3>
        <button className={style.formButton}>-&gt;</button>
      </div>
      <h1 className={style.serviceHeading}>Services</h1>
      <div className={style.services}>
        <div className={style.box}>
          <div className={style.boxTop}>
            <h2 className={style.boxLeft}><FaShip style={{fill:'#0075FF'}}/></h2>
            <h3 className={style.boxRight}>Freight Services</h3>
          </div>
          <hr className={style.boxLine} />
          <h3 className={style.boxText}>
            Open new Opportunites to grow your busniess. Enter new markets and
            discover new contitnents, We are with you, door-to-door.
          </h3>
        </div>
        <div className={style.box}>
          <div className={style.boxTop}>
            <h2><MdOutlineBusinessCenter style={{fill:'#FF4747'}}/></h2>
            <h3>Business Services</h3>
          </div>
          <hr className={style.boxLine} />
          <h3 className={style.boxText}>
            We support your goals for growth with cargo insurance, online
            payments and paperless workflow. Take your business to the next
            level.
          </h3>
        </div>
        <div className={style.box}>
          <div className={style.boxTop}>
            <h2><BsGlobe style={{fill:'#FF6813'}}/></h2>
            <h3>Shipping & Logistics</h3>
          </div>
          <hr className={style.boxLine} />
          <h3 className={style.boxText}>
            Find powerful solutions to meet your diverse transportation needs.
            Agile solutions to handle all your supply chain needs.
          </h3>
        </div>
        <div className={style.box}>
          <div className={style.boxTop}>
            <h2><Ri24HoursFill style={{fill:'#47A7FF'}}/></h2>
            <h3>24/7 Support</h3>
          </div>
          <hr className={style.boxLine} />
          <h3 className={style.boxText}>
            Receive support from our experts all over the world at every stage
            of the process, 24/7.
          </h3>
        </div>
      </div>
      {/* <div className={style.image1}></div> */}
    </div>
  );
};

export default SearchForm;
