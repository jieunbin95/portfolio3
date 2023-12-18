import React, { useEffect, useState } from "react";
import { BiLogoVimeo } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpAZ } from "react-icons/fa6";
import { gsap } from "gsap";

const Footer = () => {
  const [showBtn, setShowbtn] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY > 3000) {
        setShowbtn(true);
        gsap.to(".arrow", {
          duration: 0.6,
          x: -100,
        });
      } else {
        gsap.to(".arrow", {
          duration: 1,
          x: 100,
        });
      }
    };

    window.addEventListener("scroll", handleShowBtn);
    return () => {
      window.removeEventListener("scroll", handleShowBtn);
    };
  }, []);

  return (
    <section name="footer" className="w-full px-2 text-gray-300 bg-slate-100 ">
      {showBtn && (
        <div
          onClick={scrollToTop}
          className="arrow text-4xl text-black fixed bottom-28 right-[-80px] border-2 p-2 border-black rounded-ml cursor-pointer hover:text-current hover:border-transparent transition-all"
        >
          <FaArrowUpAZ />
        </div>
      )}

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="w-[200px] sm:w-[400px] absolute sm:static sm:pt-4">
          Copyright © {new Date().getFullYear()}. JiEun Vin. All rights
          reserved.
        </p>
        <div className="flex justify-end sm:w-[300px] text-3xl pt-4 ">
          <BiLogoVimeo className="mr-6 hover:text-teal-500 hover:ease-in-out duration-300 cursor-pointer" />
          <FaGithub className="hover:text-orange-500 hover:ease-in-out duration-300 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
