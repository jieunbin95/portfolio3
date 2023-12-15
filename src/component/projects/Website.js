import React from "react";
import website from "../../assets/website.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Website = () => {
  return (
    <div className="max-w-[1540px] mx-auto pb-40">
      <div className="mt-10 items-center w-[80%] mx-auto ">
        <div className="px-4 py-5">
          <h3 className="text-5xl font-bold text-center p-4 mb-5">
            <span className="font-thin text-slate-300 mr-2">07.</span>
            Portfolio
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-5">
            <img src={website} alt="ipad" />
          </div>

          <div className="flex flex-col mx-auto">
            <p className=" w-[600px] mx-auto p-5 leading-10 text-ml">
              <span className="font-bold">
                포트폴리오 용도로 제작한 웹사이트입니다.
              </span>{" "}
              <br />
              React를 사용하여 홈페이지를 구현하였으며 메인페이지,
              인적사항페이지, 기술스택페이지, 프로젝트 페이지로
              구성되어있습니다.
              <br />
              <br />
              Tailwind CSS를 처음으로 사용해 보면서 Utility First의 편리함과
              빠른 디자인 적용을 경험해볼 수 있었습니다. 효율적인 정보 탐색을
              제공하기 위해 React-scroll를 이용하여 원하는 영역으로 이동할 수
              있도록 제작하여 UX를 개선하였습니다.
            </p>

            <hr />

            <div className="p-5 mt-5">
              <div className="flex mb-3">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className="mr-[130px] text-2xl font-bold ">GitHub</div>
                <a
                  href="https://github.com/jieunbin95/portfolio3"
                  className="hover:text-slate-400"
                >
                  https://github.com/jieunbin95/portfolio
                </a>
              </div>
              <div className="flex mb-3">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className="mr-40 text-2xl font-bold">URL</div>
                <a
                  href="https://melodic-sopapillas-c3d8d2.netlify.app/"
                  className="hover:text-slate-400"
                >
                  https://portfolio.website.com
                </a>
              </div>
              <div className="flex">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className=" text-2xl font-bold mr-[100px]">UseSkills</div>
                <div className="font-semibold ml-3 pt-2">
                  React / Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
