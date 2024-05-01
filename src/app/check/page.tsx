"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../../components/Common/SectionTitle";

import ModalVideo from "react-modal-video";
import axios from "axios";

const Video = () => {
  const [showState, setShowState] = useState(false);
  const [claimableAmount, setClaimableAmount] = useState(0);
  const [walletAddr, setWalletAddr] = useState("");

  const handleGetClaimableAmount = async () => {
    if (walletAddr.length === 42 && walletAddr !== "") {
      try {
        const response = await axios.get(
          `https://tekio-io.vercel.app/api/users/${walletAddr}`,
        );
        // console.log("verify email data = ", response?.data);
        setClaimableAmount(response?.data);
        setShowState(true);
      } catch (err) {
        console.log("Something Went Wrong! ", err);
      }
    }
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Can check your claimable Tokens Here"
          paragraph=""
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[570px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center bg-white bg-opacity-5 backdrop-blur-sm">
                <div className="absolute right-0 top-0 flex h-full w-full flex-col items-center justify-center gap-8 p-3">
                  <h1 className="font-bold uppercase ">
                    Please enter your wallet address!
                  </h1>
                  <input
                    className="w-full rounded-xl bg-black bg-opacity-5 p-3 outline-none dark:bg-opacity-20"
                    placeholder="0X..."
                    onChange={(e) => setWalletAddr(e.target.value)}
                  />
                  {showState && claimableAmount !== 0 && (
                    <p className="font-bold uppercase ">
                      You can get{" "}
                      <span className="font-extrabold text-green-500">
                        {claimableAmount}
                      </span>{" "}
                      TOKENs
                    </p>
                  )}
                  <button
                    className={`rounded-xl bg-gray-200 bg-opacity-35 p-3 transition-all duration-300 hover:bg-gray-300 dark:bg-black dark:hover:bg-black ${walletAddr.length !== 42 || walletAddr == "" ? "cursor-not-allowed" : "cursor-pointer"}`}
                    onClick={() => handleGetClaimableAmount()}
                  >
                    Check my claimable amount
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
