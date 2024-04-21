import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi"; // Assuming you're using react-icons
import bg from "../images/bg.jpg";
import astroimg from "../images/as2.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full sm:min-h-screen  h-[150vh] overflow-hidden bg-black">
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute  inset-0 bg-black bg-opacity-50 flex flex-col md:flex-row items-center justify-center gap-4 p-4 text-white">
        {/* Image container */}
        <div
          className="flex-1 flex justify-center mt-40 sm:mt-0 -mb-20 sm:-mb-0 lg:order-2 animate-bounce"
          style={{
            animation: "bounce 10s infinite",
          }}
        >
          <img
            data-aos="fade-down-left"
            src={astroimg}
            alt="Astro"
            className="max-w-full h-auto"
          />
        </div>
        {/* Text content */}
        <div
          data-aos="fade-right"
          className="flex-1 p-10 lg:order-1 mb-32 bg-black rounded-xl bg-inherit"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Explore the Universe
          </h2>
          <p className="mt-4 text-base md:text-lg">
            Dive deep into the cosmos with daily images and insights from space.
            Discover the beauty and mysteries of the universe through our{" "}
            <Link to="/apdo">
              <span className="hover:underline hover:cursor-pointer hover:text-xl hover:font-bold text-emerald-100 ">
                Astronomy Picture of the Day feature.
                <FiExternalLink />
              </span>
            </Link>
          </p>
          <p className="mt-4 text-base md:text-lg">
            Explore the surface of Mars with high-resolution images and
            scientific discoveries captured by the Mars Rovers. Learn more about
            our{" "}
            <Link to="/mrp">
              <span className="hover:underline hover:cursor-pointer hover:text-xl hover:font-bold text-emerald-100 ">
                Mars Rover Photos feature.
                <FiExternalLink />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
