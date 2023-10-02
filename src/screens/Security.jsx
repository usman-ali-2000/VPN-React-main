import React, { useState } from "react";
import {
  BsArrowLeftCircle,
  BsFingerprint,
  BsToggleOff,
  BsToggleOn,
  BsLock,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import faceid from "../assets/face-id.png";
import frame from "../assets/Frame.svg";
import lock from "../assets/Lock.svg";
import LinearBtn from "../components/LinearBtn";

export default function Security() {
  const [finger, setFinger] = useState(false);
  const [pin, setPin] = useState(false);
  const [faceId, setFaceId] = useState(false);

  const handleFinger = () => {
    if (finger) {
      setFinger(false);
    } else {
      setFinger(true);
    }
  };

  const handlePin = () => {
    if (pin) {
      setPin(false);
    } else {
      setPin(true);
    }
  };

  const handleFaceId = () => {
    if (faceId) {
      setFaceId(false);
    } else {
      setFaceId(true);
    }
  };
  return (
    <div className="flex-center flex-col overflow-hidden">
      <div style={{ paddingleft: 40, paddingRight: 40, paddingBottom: 40,display: "flex", flexDirection: "row" }}>
        <Link to="/userSetting">
          <BsArrowLeftCircle className="text-3xl" style={{ marginRight: 40 }} />
        </Link>
        <text style={{ fontWeight: "bold", width: 200, paddingLeft: 20 }}>
          Security
        </text>
      </div>
      <img src={frame} style={{ height: 150, width: 150 }} />
      <div style={{ display: "flex", flexDirection: "row"}}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <BsFingerprint
            style={{ height: 30, width: 30, marginLeft: 30, marginTop: 35 }}
          />
          <text style={{ color: "grey", marginTop: 30, marginRight: 50 }}>
            Fingerprint
          </text>
          <div onClick={handleFinger}>
            {finger ? (
              <BsToggleOn
                style={{
                  color: "dodgerblue",
                  height: 25,
                  width: 25,
                  marginLeft: 30,
                }}
              />
            ) : (
              <BsToggleOff
                style={{ color: "grey", height: 25, width: 25, marginLeft: 30 }}
              />
            )}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={lock} style={{ height: 100, width: 100 , marginRight:10}} />
          <text style={{ color: "grey", marginTop: 0, marginLeft: 30 }}>
            Pin
          </text>
          <div style={{ marginLeft: 30 }} onClick={handlePin}>
            {pin ? (
              <BsToggleOn
                style={{ color: "dodgerblue", height: 25, width: 25 }}
              />
            ) : (
              <BsToggleOff style={{ color: "grey", height: 25, width: 25 }} />
            )}
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: 40, marginBottom: "2rem" }}
        >
          <img
            src={faceid}
            style={{ height: 30, width: 30, marginLeft: 10, marginTop: 35 }}
          />
          <text style={{ color: "grey", marginTop: 30 }}>FaceId</text>
          <div style={{ marginLeft: 15 }} onClick={handleFaceId}>
            {faceId ? (
              <BsToggleOn
                style={{ color: "dodgerblue", height: 25, width: 25 }}
              />
            ) : (
              <BsToggleOff style={{ color: "grey", height: 25, width: 25 }} />
            )}
          </div>
        </div>
      </div>
      <LinearBtn text={"Confirm Done"} loc="/usersetting" />
      <Link to={"/changepswd"}>
        <div
          style={{
            height: 70,
            width: 350,
            borderRadius: 50,
            marginLeft: 10,
            marginTop: 20,
          }}
        >
          <div style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
            <text style={{ color: "dodgerblue", marginLeft: 100 }}>
              Change Password
            </text>
          </div>
        </div>
      </Link>
    </div>
  );
}
