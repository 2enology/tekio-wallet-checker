"use client";
import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const About = () => {
  const [tabActiveState, setTabActiveState] = useState("target");
  return (
    <section id="about" className="py-8 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="About us" paragraph="" center />

        <div className="grid grid-cols-3 border-b-[1px] border-gray-200 dark:border-gray-700">
          <div
            className={`${tabActiveState === "target" && "border-b-[1px] text-blue-600"} cursor-pointer border-blue-600 py-3 text-center text-sm font-semibold md:text-xl`}
            onClick={() => setTabActiveState("target")}
          >{`Target Users`}</div>
          <div
            className={`${tabActiveState === "mission" && "border-b-[1px] text-blue-600"} cursor-pointer border-blue-600 py-3 text-center text-sm font-semibold md:text-xl`}
            onClick={() => setTabActiveState("mission")}
          >{`Our mission`}</div>
          <div
            className={`${tabActiveState === "vision" && "border-b-[1px] text-blue-600"} cursor-pointer border-blue-600 py-3 text-center text-sm font-semibold md:text-xl`}
            onClick={() => setTabActiveState("vision")}
          >{`Our vision`}</div>
        </div>

        <div className="mt-10 flex items-center justify-start">
          <div
            className={`flex w-full flex-col items-center justify-center gap-10 p-5 md:items-start md:justify-start lg:flex-row  ${tabActiveState === "mission" && "flex-row-reverse"}`}
          >
            <div className="relative h-[200px] w-full rounded-full object-cover lg:h-[300px] lg:w-[500px]">
              <Image
                src={
                  tabActiveState === "target"
                    ? "/images/bases1.png"
                    : tabActiveState === "mission"
                      ? "/images/aliens.png"
                      : "/images/chronomads.png"
                }
                alt="author"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-[700px]">
              <h1 className="text-[30px] font-extrabold md:text-[40px]">
                {tabActiveState === "target"
                  ? "Target Users"
                  : tabActiveState === "mission"
                    ? "Mission"
                    : "Vision"}
              </h1>
              {tabActiveState === "target" ? (
                <p className="text-md mt-4 text-gray-500 md:text-xl">
                  {` Young players(21-35 years old): active users of the Internet
                  and mobile applications, looking for new and fair interactive
                  forms of entertainment in online gambling.`}
                  <br />
                  <br />
                  {` Pro players(36-50 years old): interested in high quality,
                  reliable platforms with a wide range of games and a stable
                  payout system.`}
                  <br />
                  <br />
                  {`Social players: Those who value communication and competition
                  with others, and prefer platforms with gamification and
                  tournaments.`}
                </p>
              ) : tabActiveState === "mission" ? (
                <p className="text-md mt-4 text-gray-500 md:text-xl">
                  {`to go beyond conventional nft use cases, offering innovation opportunities.`}{" "}
                  <br />
                  <br />
                  {`Thrilling gambing experiences, through nfts and tokens.`}
                  <br />
                  <br />
                  {`at the core of our mission is the commitment to active participation, revenue-sharing, and the creaction`}
                </p>
              ) : (
                <p className="text-md mt-4 text-gray-500 md:text-xl">
                  {`We aim to inspire positive change in the industry by example and adhering to regulatory standards.`}{" "}
                  <br />
                  <br />{" "}
                  {`Our metaverse casino transcends traditional boundaries, presenting infinite gaming realms.`}{" "}
                  <br />
                  <br />
                  {`Unwavering commitment to being a licensed entity
                    , ensuring the higheset standards of security, transparency, and regulatory compliance.`}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
      </div>
    </section>
  );
};

export default About;
