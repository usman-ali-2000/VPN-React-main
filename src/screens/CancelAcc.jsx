import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoPersonRemoveOutline } from "react-icons/io5";
import Modal from "react-modal";
import grouppic from "../assets/Group 7.svg";
import style from "../assets/Style.svg";
import bodycross from "../assets/bodycross.svg";
import cross from "../assets/Cross 1.svg";

export default function CancelAcc() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const customOverlayStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",

      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div className="flex-center flex-col overflow-hidden">
      <div style={{ padding: 40, display: "flex", flexDirection: "row" }}>
        <Link to="/usersetting">
          <BsArrowLeftCircle className="text-3xl" style={{ marginRight: 40 }} />
        </Link>
        <text style={{ fontWeight: "bold", width: 200, paddingLeft: 20 }}>
          Cancel Account
        </text>
      </div>
      <div className="flex-center flex-col">
        <img src={grouppic} />
      </div>
      <div className="flex-center flex-col mt-10">
        <text style={{ fontSize: 20, fontWeight: "bold" }}>
          Do You Want to Cancel
        </text>
        <text style={{ fontSize: 20, fontWeight: "bold" }}>Your Account?</text>
        <text style={{ marginTop: 20, color: "grey" }}>
          If Cancel Your <text style={{ color: "dodgerblue" }}>Account,</text>
          Your
        </text>
        <text style={{ color: "grey" }}>
          Account Has been Deleted For Ever...
        </text>
      </div>
      <div
        className="text-white  cursor-pointer rounded-full p-6 mt-2"
        style={{ backgroundColor: "crimson" }}
        onClick={handleOpenModal}
      >
        <div className="flex-center flex-row">
          <img
            src={style}
            className="background: linear-gradient(0deg, #EB2051, #EB2051),
linear-gradient(0deg, #DFDFE8, #DFDFE8); 
"
          />
          <text style={{ color: "white", marginLeft: 10 }}>Cancel Account</text>
        </div>
      </div>
      <div>
        <Modal
          className="custom-modal"
          isOpen={openModal}
          onRequestClose={handleCloseModal}
          style={customOverlayStyles}
        >
          <div className="flex-center flex-col">
            <div
              style={{
                backgroundImage: `url(${bodycross})`,
                height: 150,
                width: 100,
                marginTop: 40,
              }}
            >
              <img src={cross} className="mt-20 mx-14" />
            </div>
            <div
              className="rounded-full cursor-pointer p-6 mt-4"
              style={{ backgroundColor: "crimson" }}
              onClick={handleOpenModal}
            >
              <div className="flex-center flex-row">
                <img
                  src={style}
                  className="background: linear-gradient(0deg, #EB2051, #EB2051), linear-gradient(0deg, #DFDFE8, #DFDFE8)"/>
                <text style={{ color: "white", marginLeft: 10 }}>
                  Cancel Account
                </text>
              </div>
            </div>
            <div
              className="flex-center flex-row h-16 w-60"
              style={{ borderRadius: 50, backgroundColor: "white" }}
              onClick={handleCloseModal}
            >
              <div className="cursor-pointer">
                <text style={{ color: "grey", marginTop: 20 }}>Cancel</text>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
