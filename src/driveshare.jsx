import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/assets/images/Logo.svg";
import playstore from "../src/assets/images/playstore.png";
import appstore from "../src/assets/images/appstore.png";
import checks from "../src/assets/images/checks.png";
import cloud from "../src/assets/images/cloud.png";
import cloud1 from "../src/assets/images/cloud1.png";
import rivershare from "../src/assets/images/rivershare.png";
import twitter from "../src/assets/images/twitter.svg";
import telegram from "../src/assets/images/telegram.svg";
import medium from "../src/assets/images/medium.svg";
import car from "../src/assets/images/car.png";
import driveshare from "../src/assets/images/driveshare_phone.png";
import "../src/assets/css/custom.css";

import { useState } from "react";

const Driveshare = () => {
  const [OpenModal, SetOpenModal] = useState(false);
  return (
    <div className="back">
      <div className="row justify-content-start">
        <div className="col-md-4">
          <img
            src={logo}
            alt="logo"
            className="position-absolute ms-5 mt-4"
            height={110}
            width={150}
          />
          <div className="d-flex justify-content-end ms-5">
            <img
              src={cloud}
              alt="cloud"
              className="position-absolute mt-5 ps-5"
              height={68}
            />
          </div>
        </div>
        <div className="col-md-8">
          {/*<div className="d-flex justify-content-end">
  <img src={checks} alt="checks" />*/}

          <div className="d-flex mt-0 me-0 justify-content-end">
            <div className="d-flex justify-content-end">
              <div className="d-flex align-items-center mt-5 me-3 download">
                <h5 className="text-uppercase ">
                  Download our{" "}
                  <span className="driveshare-color">driveshare</span> app
                </h5>
              </div>
              <img
                src={checks}
                alt="checks"
                className="checks position-fixed"
              />
              <div
                data-bs-target="#staticBackdrop"
                onClick={() => {
                  SetOpenModal(true);
                }}
              >
                <img
                  src={appstore}
                  alt="playstore"
                  height={60}
                  width={182}
                  className=" mt-5 position-relative cursor"
                />
              </div>
              <div
                onClick={() => {
                  SetOpenModal(true);
                }}
              >
                <img
                  src={playstore}
                  alt="appstore"
                  height={60}
                  width={182}
                  className="me-5 ms-3 mt-5 position-relative cursor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex justify-content-end">
            <img
              src={driveshare}
              alt="main"
              height={"75%"}
              width={"auto"}
              className="phone-img me-5"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-start rivershare">
            <img src={rivershare} alt="rivershare" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="cloud-img">
            <img src={cloud1} alt="cloud1" height={"30%"} width={"auto"} />
          </div>
          <div className="tokenomics">
            <h5 className="text-uppercase driveshare-color align-items-center">
              Tokenomics
            </h5>
          </div>

          <div className="d-flex tokonomics-content">
            <div className="tokonomi_text align-items-center">
              <p className="mb-0 text-center">Total Supply</p>
              <p className="driveshare-color">1000,000,000</p>
            </div>
            <div className="vr my-3 ms-3"></div>

            <div className="tokonomi_text align-items-center">
              <p className="mb-0">Buy/Sell Tax</p>
              <p className="driveshare-color ">5/5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="ca-text">
            <p>
              {" "}
              CA: &nbsp; &nbsp; &nbsp;0x7E970D7585b44Ce68E95B63CF692Dc56B50E791f
            </p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-9 offset-md-3">
          <div className="driveshare-footer d-flex">
            <div className="driveshare-icon ms-5 ">
              <a
                href="https://twitter.com/driversharedao?s=09"
                target={"_blank"}
                rel="noreferrer"
                className="text-decoration-none text-dark"
              >
                <img src={twitter} alt="tweet" />
                <p>Twitter</p>
              </a>
            </div>
            <div className="driveshare-icon ms-5">
              <a
                href="https://t.me/drivesharedao"
                target={"_blank"}
                rel="noreferrer"
                className="text-decoration-none text-dark"
              >
                <img src={telegram} alt="tweet" />
                <p>Telegram</p>
              </a>
            </div>
            <div className="driveshare-icon ms-5">
              <a
                href="https://medium.com/@drivesharedao"
                target={"_blank"}
                rel="noreferrer"
                className="text-decoration-none text-dark"
              >
                <img src={medium} alt="tweet" />
                <p>Medium</p>
              </a>
            </div>
          </div>
          <div className="car-footer">
            <img src={car} alt="car" className="car-size" />
          </div>
        </div>
      </div>
      {OpenModal && (
        <div
          className="modal  show modal-lg position-absolute d-block"
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    SetOpenModal(false);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center">
                  <img src={logo} alt="logo-modal" />
                </div>
                <h2 className="driveshare-color text-center mt-3">
                  Comming Soon
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Driveshare;
