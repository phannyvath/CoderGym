import React from "react";
import { NavbarMenu } from "../mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className=" container flex justify-between items-center py-8">
          {/* logo section */}
          <div className=" text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className=" text-secondary">Gym</p>
          </div>
          {/* Menu Section */}
          <div className=" hidden md:block">
            <ul className=" flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className=" inline-block py-1 px-3 hover:text-primary hover:font-semibold"
                    >
                      {item.title}{" "}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icon Section */}
          <div className=" flex items-center gap-4">
            <button className=" text-2xl hover:bg-primary hover:text-white rounded-full p-2">
              <CiSearch />
            </button>
            <button className=" text-2xl hover:bg-primary hover:text-white rounded-full p-2">
              <PiShoppingCartThin />
            </button>
            <button className=" hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className=" md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className=" text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Nav;
