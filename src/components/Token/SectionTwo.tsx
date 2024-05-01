import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="relative overflow-hidden py-16  md:py-20 lg:py-28">
      <h1 className="absolute right-0 top-[270px] -z-[1] rotate-[30deg] text-[180px] font-extrabold text-gray-200 dark:text-gray-800">
        TOKEN UTILITY
      </h1>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-2">
                <h3 className="mb-1 border-gray-200 text-xl font-bold text-black dark:text-gray-300 sm:text-2xl lg:text-xl xl:text-2xl">
                  {`- O1 GoverNance Rights`}
                </h3>
                <p className="sm:text-md text-base font-medium leading-relaxed text-body-color sm:leading-relaxed">
                  {`$TEK token holders will have the power to propose and vote on project developments, partnerships, and strategic initiatives.`}
                </p>
              </div>
              <div className="mb-2">
                <h3 className="mb-1 border-gray-200 text-xl font-bold text-black dark:text-gray-300 sm:text-2xl lg:text-xl xl:text-2xl">
                  {`- O2 Discounted Fees`}
                </h3>
                <p className="sm:text-md text-base font-medium leading-relaxed text-body-color sm:leading-relaxed">
                  {`Within the ecosystem, $TEK token holders may be eligible for discounted fees or reduced transaction costs.`}
                </p>
              </div>
              <div className="mb-2">
                <h3 className="mb-1 border-gray-200 text-xl font-bold text-black dark:text-gray-300 sm:text-2xl lg:text-xl xl:text-2xl">
                  {`- O3 Staking Rewards`}
                </h3>
                <p className="sm:text-md text-base font-medium leading-relaxed text-body-color sm:leading-relaxed">
                  {`Token holderes can stake their $TEK tokens to earn additional rewards, such as platform tokens or other incentives within the ecosystem. `}
                </p>
              </div>
              <div className="mb-2">
                <h3 className="mb-1 border-gray-200 text-xl font-bold text-black dark:text-gray-300 sm:text-2xl lg:text-xl xl:text-2xl">
                  {`- O4 Exclusive Benefits`}
                </h3>
                <p className="sm:text-md text-base font-medium leading-relaxed text-body-color sm:leading-relaxed">
                  {`$TEK token holders will enjoy exclusive access to benefits within Virtuo Lit;s ecosystem.`}
                </p>
              </div>
              <div className="mb-2">
                <h3 className="mb-1 border-gray-200 text-xl font-bold text-black dark:text-gray-300 sm:text-2xl lg:text-xl xl:text-2xl">
                  {`- O5 Airdrops and Rewards`}
                </h3>
                <p className="sm:text-md text-base font-medium leading-relaxed text-body-color sm:leading-relaxed">
                  {`Virtuo Ltd may periodically organize airdrops and rewards programs exclusively for $TEK token holders.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
