import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import footerBg from "../images/footer.jpg";

export default function FooterCom() {
  return (
    <Footer
      container
      style={{ backgroundImage: `url(${footerBg})` }}
      className="border border-t-8 border-indigo-950"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
                NASA {`{APIs}`}
              </span>
            </Link>
          </div>
          <div className="grid gap-8 mt-4 grid-cols-3">
            <div className="">
              <Link
                to="/"
                className="text-white font-semibold text-lg hover:underline hover:text-xl"
              >
                Home
              </Link>
            </div>
            <div className="">
              <Link
                to="/apdo"
                className="text-white font-semibold text-lg hover:underline hover:text-xl"
              >
                APOD
              </Link>
            </div>
            <div className="">
              <Link
                to="/mrp"
                className="text-white font-semibold text-lg hover:underline hover:text-xl"
              >
                MRP
              </Link>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="">
          <Footer.Copyright
            className="text-white font-semibold"
            href="#"
            by="NASA {APIs}"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}
