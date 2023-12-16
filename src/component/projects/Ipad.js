import React from "react";
import ipad from "../../assets/ipad.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Ipad = () => {
  return (
    <div className=" pb-40 pt-10">
      <div className=" mt-10 items-center xl:w-[80%] mx-auto ">
        <div className="px-4 py-5">
          <h3 className="text-5xl font-bold text-center p-4 mb-5">
            <span className="font-thin text-slate-300 mr-2">01.</span>
            Ipad-Website
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:relative md:left-5 p-5">
            <img src={ipad} alt="ipad" />
          </div>

          <div className="md:relative md:left-5 flex flex-col mx-auto">
            <p className="md:w-[450px] xl:w-[600px] mx-auto p-5 leading-10 text-ml border-b-2">
              <span className="font-bold">
                포트폴리오 용도로 제작한 아이패드 클론코딩입니다.
              </span>{" "}
              <br />
              홈페이지의 기본적인 구조와 기능에 대해 배울 수 있었으며, 이미지
              스프라이트 기법을 이용한 애니메이션 효과와 비디오 삽입, 메뉴
              드롭다운 등을 사용하여 UI에 대해 깊게 고민해보고, 제작하였습니다.
              <br />
              <br />
              디바이스 및 화면의 너비에 따라 레이아웃이나 스타일을 다르게 주어
              반응형 웹사이트로 제작하였습니다.
            </p>

            <div className=" p-5 mt-5">
              <div className="flex mb-3">
                <IoCheckmarkDoneSharp className=" text-2xl mr-2" />
                <div className=" mr-[118px] text-2xl font-bold ">GitHub</div>
                <a
                  href="https://github.com/jieunbin95/iPad"
                  className="hover:text-slate-400"
                >
                  https://github.com/jieunbin95/iPad
                </a>
              </div>
              <div className="flex mb-3">
                <IoCheckmarkDoneSharp className="md:text-xl text-2xl mr-2" />
                <div className=" mr-[150px] text-2xl font-bold">URL</div>
                <a
                  href="https://elaborate-medovik-0574d6.netlify.app/"
                  className="hover:text-slate-400"
                >
                  https://ipad.website.com
                </a>
              </div>
              <div className="flex">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className=" text-2xl font-bold mr-[100px]">UseSkills</div>
                <div className="font-semibold pt-2">
                  HTML / CSS / JavaScript
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ipad;
