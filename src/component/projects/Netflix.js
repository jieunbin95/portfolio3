import React from "react";
import netflix from "../../assets/netflix.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Netflix = () => {
  return (
    <div className="max-w-[1540px] mx-auto pb-40">
      <div className="mt-10 items-center w-[80%] mx-auto ">
        <div className="px-4 py-5">
          <h3 className="text-5xl font-bold text-center p-4 mb-5">
            <span className="font-thin text-slate-300 mr-2">04.</span>
            Netflix-Website
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col mx-auto">
            <p className=" w-[600px] mx-auto p-5 leading-10 text-ml">
              <span className="font-bold">
                학습을 목적으로 구현한 영화 웹사이트입니다.
              </span>{" "}
              <br />
              MovieList 페이지, Search 페이지, MovieDetail 페이지로
              구성하였습니다. Bootstrap과 Styled-components, Swiper 등을
              사용하면서 UI & UX에 대해 깊게 고민하며 스스로 디자인하였습니다.
              <br />
              <br />
              기능정의부터 배포까지 스스로 진행하는 것을 목적으로 프로젝트를
              진행하였고, 학습한 기술 스택을 실제 프로젝트에 적용시키며 개발
              환경에서 발생하는 문제를 직면하고, 해결에 대한 고민을 할 수 있어서
              좋은 경험이었습니다.
            </p>

            <hr />

            <div className="p-5 mt-5">
              <div className="flex mb-3">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className="mr-[120px] text-2xl font-bold ">GitHub</div>
                <a
                  href="https://github.com/jieunbin95/netflix-website"
                  className="hover:text-slate-400"
                >
                  https://github.com/jieunbin95/netflix
                </a>
              </div>
              <div className="flex mb-3">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className="mr-[150px] text-2xl font-bold">URL</div>
                <a
                  href="https://tourmaline-vacherin-291a7c.netlify.app/"
                  className="hover:text-slate-400"
                >
                  https://netflix.website.com
                </a>
              </div>
              <div className="flex">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className=" text-2xl font-bold mr-[100px]">UseSkills</div>
                <div className="font-semibold pt-2">
                  React / Axios / Styled-Components
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <img src={netflix} alt="ipad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netflix;