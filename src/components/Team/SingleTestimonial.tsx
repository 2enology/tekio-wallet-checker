import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <div className="item-center flex flex-col items-center gap-5 text-center">
          <div className="relative mr-4 h-[150px] w-full max-w-[150px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="relative w-full">
            <h3 className="mb-1 text-lg font-semibold uppercase text-dark dark:text-white lg:text-base xl:text-2xl">
              {name}
            </h3>
            <p className="text-md text-body-color">{designation}</p>
            <div className="absolute -bottom-8 -right-5 z-[1]">
              <svg
                width="179"
                height="158"
                viewBox="0 0 179 158"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                  fill="url(#paint0_linear_70:153)"
                />
                <path
                  opacity="0.3"
                  d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                  fill="url(#paint1_linear_70:153)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_70:153"
                    x1="69.6694"
                    y1="29.9033"
                    x2="196.108"
                    y2="83.2919"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_70:153"
                    x1="165.348"
                    y1="-75.4466"
                    x2="-3.75136"
                    y2="103.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
