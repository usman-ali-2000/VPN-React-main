import React, { useState,useEffect } from "react";
import { IoPowerOutline, } from "react-icons/io5";
import {AiFillThunderbolt,} from "react-icons/ai"
function VPNDiamond({ clicked }) {
  // const [clicked, setClicked] = useState(false);
  const [showThunderDone, setShowThunderDone] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  //   console.log(clicked);
  // };
  useEffect(() => {
    if (clicked) {
      // After 3 seconds, change the content to "Thunder and Done"
      const timeoutId = setTimeout(() => {
        setShowThunderDone(true);
      }, 3000);

      // Clean up the timeout when the component unmounts or when `clicked` changes
      return () => {clearTimeout(timeoutId);setShowThunderDone(false);}
    }
  }, [clicked]);
  return (
    <svg
      width="344"
      height="383"
      viewBox="0 0 344 383"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // onClick={handleClick}
    >
      <g filter="url(#filter0_d_590_8067)">
        <path
          d="M114.247 41.469C137.128 28.2089 148.569 21.5788 160.866 19.5451C168.239 18.3257 175.761 18.3257 183.134 19.5451C195.431 21.5788 206.872 28.2088 229.753 41.469C252.512 54.6582 263.891 61.2529 271.748 70.8521C276.459 76.6079 280.198 83.0952 282.816 90.0574C287.181 101.668 287.181 114.946 287.181 141.5C287.181 168.054 287.181 181.332 282.816 192.943C280.198 199.905 276.459 206.392 271.748 212.148C263.891 221.747 252.512 228.342 229.753 241.531C206.872 254.791 195.431 261.421 183.134 263.455C175.761 264.674 168.239 264.674 160.866 263.455C148.569 261.421 137.128 254.791 114.247 241.531C91.4882 228.342 80.1087 221.747 72.2517 212.148C67.5406 206.392 63.8021 199.905 61.1844 192.943C56.8186 181.332 56.8186 168.054 56.8186 141.5C56.8186 114.946 56.8186 101.668 61.1844 90.0574C63.8021 83.0952 67.5406 76.6079 72.2517 70.8521C80.1087 61.2529 91.4882 54.6582 114.247 41.469Z"
          fill="white"
        />
        <path
          d="M114.636 42.1399C137.57 28.8493 148.868 22.3152 160.992 20.3101C168.281 19.1046 175.719 19.1046 183.008 20.3101C195.132 22.3152 206.43 28.8493 229.364 42.1399C252.175 55.3594 263.402 61.879 271.148 71.3432C275.806 77.0336 279.502 83.4472 282.09 90.3303C286.394 101.778 286.406 114.884 286.406 141.5C286.406 168.116 286.394 181.222 282.09 192.67C279.502 199.553 275.806 205.966 271.148 211.657C263.402 221.121 252.175 227.641 229.364 240.86C206.43 254.151 195.132 260.685 183.008 262.69C175.719 263.895 168.281 263.895 160.992 262.69C148.868 260.685 137.57 254.151 114.636 240.86C91.8248 227.641 80.5983 221.121 72.8518 211.657C68.1942 205.966 64.4982 199.553 61.9102 192.67C57.6059 181.222 57.594 168.116 57.594 141.5C57.594 114.884 57.6059 101.778 61.9102 90.3303C64.4982 83.4472 68.1942 77.0336 72.8518 71.3432C80.5983 61.879 91.8248 55.3594 114.636 42.1399Z"
          stroke="url(#paint0_linear_590_8067)"
          strokeOpacity="0.06"
          strokeWidth="1.55086"
        />
      </g>
      <g filter="url(#filter1_d_590_8067)">
        <path
          d="M124.057 57.094C145.467 44.6775 156.172 38.4692 167.831 37.4328C170.937 37.1566 174.063 37.1566 177.169 37.4328C188.828 38.4692 199.533 44.6775 220.943 57.094C242.216 69.4313 252.853 75.5999 259.528 85.1333C261.307 87.6742 262.858 90.3671 264.163 93.1807C269.062 103.737 269.062 116.158 269.062 141C269.062 165.842 269.062 178.263 264.163 188.819C262.858 191.633 261.307 194.326 259.528 196.867C252.853 206.4 242.216 212.569 220.943 224.906C199.533 237.322 188.828 243.531 177.169 244.567C174.063 244.843 170.937 244.843 167.831 244.567C156.172 243.531 145.467 237.322 124.057 224.906C102.784 212.569 92.147 206.4 85.4724 196.867C83.6935 194.326 82.1422 191.633 80.8366 188.819C75.9382 178.263 75.9382 165.842 75.9382 141C75.9382 116.158 75.9382 103.737 80.8366 93.1807C82.1422 90.3671 83.6935 87.6742 85.4724 85.1333C92.147 75.5999 102.784 69.4313 124.057 57.094Z"
          fill={clicked ? "url(#paint1_linear_590_8067)":"white"  }
        />
      </g>
      <path
        d="M261.277 141.698C261.277 164.199 261.251 175.07 257.097 184.444C255.694 187.61 253.957 190.618 251.917 193.416C245.875 201.701 236.474 207.159 216.987 218.409C197.501 229.66 188.074 235.073 177.878 236.163C174.434 236.531 170.961 236.531 167.518 236.163C157.322 235.073 147.895 229.66 128.409 218.409C108.922 207.159 99.5205 201.701 93.479 193.416C91.4384 190.618 89.7019 187.61 88.2988 184.444C84.1447 175.07 84.1191 164.199 84.1192 141.698C84.1191 119.197 84.1447 108.326 88.2988 98.9516C89.7019 95.7852 91.4385 92.7774 93.479 89.9792C99.5205 81.6943 108.922 76.2369 128.409 64.9864C147.895 53.7358 157.322 48.3226 167.518 47.2329C170.961 46.8649 174.434 46.8649 177.878 47.2329C188.074 48.3226 197.501 53.7358 216.987 64.9863C236.474 76.2369 245.875 81.6943 251.917 89.9792C253.957 92.7775 255.694 95.7852 257.097 98.9516C261.251 108.326 261.277 119.197 261.277 141.698Z"
        stroke="url(#paint2_linear_590_8067)"
        strokeWidth="2.50806"
      />
      <defs>
        <filter
          id="filter0_d_590_8067"
          x="0.987694"
          y="18.6306"
          width="342.025"
          height="363.604"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="62.0343" />
          <feGaussianBlur stdDeviation="27.9155" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0802083 0 0 0 0 0.256666 0 0 0 0 0.458333 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_590_8067"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_590_8067"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_590_8067"
          x="54.2262"
          y="27.9205"
          width="236.548"
          height="250.973"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12.4069" />
          <feGaussianBlur stdDeviation="10.856" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.00392157 0 0 0 0 0.447059 0 0 0 0 1 0 0 0 0.56 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_590_8067"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_590_8067"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_590_8067"
          x1="172"
          y1="275"
          x2="172"
          y2="60.4793"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#151417" />
          <stop offset="1" stopColor="#151417" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_590_8067"
          x1="172.5"
          y1="253"
          x2="167.327"
          y2="29.1195"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0066E7" />
          <stop offset="0.25" stopColor="#0071FF" />
          <stop offset="1" stopColor="#4ECAFF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_590_8067"
          x1="86.1845"
          y1="196.052"
          x2="172.903"
          y2="40.0424"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <foreignObject x="70" y="100" width="200" height="100">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className={
            clicked
              ? ` flex-center gap-4 flex-col w-full cursor-pointer text-white `
              : "text-primary flex-center gap-4 flex-col w-full cursor-pointer "
          }
        >
        {clicked ? 
        showThunderDone ? (
        <>
        <AiFillThunderbolt className="text-4xl" />
          <p> Connected</p>
        </>
      ) : (
        <>
          <p>50%</p>
          <p>Almost Done</p>
        </>
      ):(
        <>
          <IoPowerOutline className="text-4xl" />
          <p className="">Tap to Connect</p>
        </>
      )
     
    }
        </div>
      </foreignObject>
    </svg>
  );
}

export default VPNDiamond;
