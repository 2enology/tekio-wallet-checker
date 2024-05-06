"use client";
import SectionTitle from "../Common/SectionTitle";

const Roadmap = () => {
  const roadMapData = [
    {
      title: "Q4 - 2023",
      target: [
        { content: "Website Development", done: true },
        { content: "Marketing Campaign", done: true },
        { content: "Vision and Mission AMA with community", done: true },
        { content: "Building Community", done: true },
        { content: "Genesis Tekio 1 NFT launch", done: true },
      ],
    },
    {
      title: "Q1 - 2024",
      target: [
        { content: "Staking campaign for NFT holders", done: true },
        { content: "Presale plans with Launchpads", done: false },
        { content: "Airdrop of $TEK tokens", done: false },
        { content: "TGE and $TEK Token Launch", done: false },
        {
          content: "More partnerships and onboarding ambassadors",
          done: false,
        },
      ],
    },
    {
      title: "Q2 - 2024",
      target: [
        { content: "More Cex Listing", done: false },
        { content: "More games in the Casino", done: false },
        { content: "Shareholding Utility Implement", done: false },
        { content: "Revenus sharing with NFT holders", done: false },
        { content: "Launch of online sports betting platform", done: false },
        { content: "Tek Volunteer program", done: false },
      ],
    },
    {
      title: "Q3 - 2024",
      target: [
        { content: "Tekio Season 2 NFTs", done: false },
        { content: "More games in the Casino", done: false },
        {
          content: "Buyback and burn of $TEK phase implementation",
          done: false,
        },
        {
          content: "Future strategic collabs with Blue chip projects",
          done: false,
        },
        { content: "Gamefi event-based games", done: false },
      ],
    },
    {
      title: "Q4 - 2024",
      target: [
        { content: "Website Development", done: false },
        { content: "Marketing Campaign", done: false },
        { content: "Vision and Mission AMA with community", done: false },
        { content: "Building Community", done: false },
        { content: "Genesis Tekio 1 NFT launch", done: false },
      ],
    },
  ];

  return (
    <section
      id="roadmap"
      className="relative z-10 mb-10 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle title="Roadmap" paragraph="" center width="665px" />

        <div className="w-full overflow-x-auto scroll-smooth">
          <div className="flex w-[1650px] items-start gap-20">
            {roadMapData.map((data, index) => (
              <div
                className="flex w-[360px] flex-col items-start justify-start gap-3"
                key={index}
              >
                <div className="w-full border-[1px] border-blue-600" />
                <h1 className="text-2xl font-bold">{data.title}</h1>
                {data.target.map((value, index) => (
                  <p
                    className="flex items-center gap-2 text-sm font-semibold text-gray-500"
                    key={index}
                  >
                    {" "}
                    {value.done ? (
                      <svg
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        className="fill-current"
                      >
                        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                      </svg>
                    ) : (
                      "- "
                    )}
                    {value.content}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Roadmap;
