import React from "react";
import Ipad from "../component/projects/Ipad";
import Disney from "../component/projects/Disney";
import Guestbook from "./projects/Guestbook";
import Netflix from "./projects/Netflix";
import Shopping from "./projects/Shopping";
import Website from "./projects/Website";
import Youtube from "./projects/Youtube";

const Feature = () => {
  return (
    <section name="project" className="w-full my-[500px] xl:my-40">
      <div className="flex flex-col justify-center items-center">
        <div className="px-4 pt-10 ">
          <h3 className="pt-20 text-6xl font-bold text-center border-b-2 border-black pb-2">
            PROJECTS
          </h3>
        </div>

        <div className="max-w-[1540px] mx-auto">
          <Ipad />
          <Shopping />
          <Disney />
          <Netflix />
          <Guestbook />
          <Youtube />
          <Website />
        </div>
      </div>
    </section>
  );
};

export default Feature;
