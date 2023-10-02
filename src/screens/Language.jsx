import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { US, IN, KE, SA, NL } from "country-flag-icons/react/3x2";
import { IoCheckmarkCircle, IoSearch } from "react-icons/io5";
import group from "../assets/Group3.svg";
import LinearBtn from "../components/LinearBtn";

export default function Language() {
  const [us, setUs] = useState(false);
  const [ind, setInd] = useState(false);
  const [ke, setKe] = useState(false);
  const [sa, setSa] = useState(false);
  const [nl, setNl] = useState(false);

  return (
    <div className="flex-center flex-col overflow-hidden">
      <div style={{ display: "flex", alignItems:"center" }}>
        <Link to="/usersetting">
          <BsArrowLeftCircle className="text-3xl" style={{ marginRight: 40 }} />
        </Link>
        <text style={{ fontWeight: "bold", width: 200, paddingLeft: 20 }}>
          Language
        </text>
        <IoSearch style={{ height: 25, width: 25 }} />
      </div>
      <img src={group} style={{ height: 140, width: 150 }} />
      <div style={{ display: "flex", flexDirection: "column", height: 300 , marginBottom:"1rem"}}>
        <div
          style={{ display: "flex", flexDirection: "row" }}
          onClick={() => {
            setUs(true);
            setInd(false);
            setKe(false), setNl(false);
            setSa(false);
          }}
        >
          <US title="United States" className="rounded-full w-16 h-16 p-2" />
          <text style={{ fontWeight: "bold", marginTop: 18, width: 200 }}>
            English
          </text>
          {us ? (
            <IoCheckmarkCircle
              style={{
                height: 18,
                width: 18,
                marginTop: 18,
                color: "dodgerblue",
              }}
            />
          ) : (
            <div
              style={{
                height: 15,
                width: 15,
                borderWidth: 2,
                borderColor: "lightgrey",
                borderRadius: 30,
                marginTop: 18,
              }}
            ></div>
          )}
        </div>
        <div
          style={{ display: "flex", flexDirection: "row" }}
          onClick={() => {
            setUs(false);
            setInd(true);
            setKe(false), setNl(false);
            setSa(false);
          }}
        >
          <IN title="India" className="rounded-full w-16 h-16 p-2" />
          <text style={{ fontWeight: "bold", marginTop: 18, width: 200 }}>
            Hindi
          </text>
          {ind ? (
            <IoCheckmarkCircle
              style={{
                height: 18,
                width: 18,
                marginTop: 18,
                color: "dodgerblue",
              }}
            />
          ) : (
            <div
              style={{
                height: 15,
                width: 15,
                borderWidth: 2,
                borderColor: "lightgrey",
                borderRadius: 30,
                marginTop: 18,
              }}
            ></div>
          )}
        </div>
        <div
          style={{ display: "flex", flexDirection: "row" }}
          onClick={() => {
            setUs(false);
            setInd(false);
            setKe(true), setNl(false);
            setSa(false);
          }}
        >
          <KE title="Korea" className="rounded-full w-16 h-16 p-2" />
          <text style={{ fontWeight: "bold", marginTop: 18, width: 200 }}>
            Korean
          </text>
          {ke ? (
            <IoCheckmarkCircle
              style={{
                height: 18,
                width: 18,
                marginTop: 18,
                color: "dodgerblue",
              }}
            />
          ) : (
            <div
              style={{
                height: 15,
                width: 15,
                borderWidth: 2,
                borderColor: "lightgrey",
                borderRadius: 30,
                marginTop: 18,
              }}
            ></div>
          )}
        </div>
        <div
          style={{ display: "flex", flexDirection: "row" }}
          onClick={() => {
            setUs(false);
            setInd(false);
            setKe(false), setNl(true);
            setSa(false);
          }}
        >
          <NL title="New Zealand" className="rounded-full w-16 h-16 p-2" />
          <text style={{ fontWeight: "bold", marginTop: 18, width: 200 }}>
            New Zealand
          </text>
          {nl ? (
            <IoCheckmarkCircle
              style={{
                height: 18,
                width: 18,
                marginTop: 18,
                color: "dodgerblue",
              }}
            />
          ) : (
            <div
              style={{
                height: 15,
                width: 15,
                borderWidth: 2,
                borderColor: "lightgrey",
                borderRadius: 30,
                marginTop: 18,
              }}
            ></div>
          )}
        </div>
        <div
          style={{ display: "flex", flexDirection: "row" }}
          onClick={() => {
            setUs(false);
            setInd(false);
            setKe(false), setNl(false);
            setSa(true);
          }}
        >
          <SA title="South Africa" className="rounded-full w-16 h-16 p-2" />
          <text style={{ fontWeight: "bold", marginTop: 18, width: 200 }}>
            South Africa
          </text>
          {sa ? (
            <IoCheckmarkCircle
              style={{
                height: 18,
                width: 18,
                marginTop: 18,
                color: "dodgerblue",
              }}
            />
          ) : (
            <div
              style={{
                height: 15,
                width: 15,
                borderWidth: 2,
                borderColor: "lightgrey",
                borderRadius: 30,
                marginTop: 18,
              }}
            ></div>
          )}
        </div>
      </div>
      <LinearBtn text="Set Language" loc="/usersetting" />
    </div>
  );
}
