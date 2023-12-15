import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handler = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full h-[80px] z-10 fixed drop-shadow-lg bg-white">
      <div className="flex w-full h-full items-center justify-between px-10">
        <div className="flex items-center">
          <h1 className=" font-bold sm:text-4xl mr-4">
            VIN <br />
            VIN
          </h1>
        </div>

        <div>
          <ul className="hidden md:flex pr-4 font-semibold">
            <li className="cursor-pointer">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="skill" smooth={true} duration={500}>
                Skill
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="project" smooth={true} duration={500}>
                Project
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          {nav === false ? (
            <div onClick={handler} className="text-2xl">
              <FiMenu />
            </div>
          ) : (
            <div onClick={handler} className="text-2xl">
              <IoClose />
            </div>
          )}
        </div>
      </div>

      {nav ? (
        <ul className="w-full bg-white md:hidden absolute px-7">
          <li className="border-b-2 cursor-pointer border-zinc-300">
            <Link onClick={handler} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="border-b-2 cursor-pointer border-zinc-300">
            <Link onClick={handler} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="border-b-2 cursor-pointer border-zinc-300">
            <Link onClick={handler} to="skill" smooth={true} duration={500}>
              Skill
            </Link>
          </li>
          <li className="border-b-2 cursor-pointer ">
            <Link onClick={handler} to="project" smooth={true} duration={500}>
              Project
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
