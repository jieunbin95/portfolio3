import React from "react";
import shopping from "../../assets/쇼핑몰.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Shopping = () => {
  return (
    <div className="max-w-[1540px] mx-auto pb-40">
      <div className="mt-10 items-center w-[80%] mx-auto ">
        <div className="px-4 py-5">
          <h3 className="text-5xl font-bold text-center p-4 mb-5">
            <span className="font-thin text-slate-300 mr-2">02.</span>
            ShoppingMall-Website
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col mx-auto">
            <p className=" w-[600px] mx-auto p-5 leading-10 text-ml">
              <span className="font-bold">
                포트폴리오 용도로 제작한 쇼핑몰 웹사이트입니다.
              </span>{" "}
              <br />
              로그인 페이지, 제품 페이지, 제품디테일 페이지로 구성하였습니다.
              이론으로만 학습하던 React를 처음으로 실전에 적용해보면서 React
              개발자에 한 발자국 더 다가갈 수 있었던 프로젝트입니다.
              <br />
              <br />
              React Router를 사용하면서 React의 SPA에 대한 개념을 더욱 확실하게
              숙지할 수 있었으며, 사용자가 인증(로그인)이 되어 있을 때만 특정
              페이지에 접근할 수 있도록 PrivateRouter기능을 구현하였습니다.
            </p>

            <hr />

            <div className="p-5 mt-5">
              <div className="flex mb-3">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className="mr-[100px] text-2xl font-bold ">GitHub</div>
                <a
                  href="https://github.com/jieunbin95/Website-react"
                  className="hover:text-slate-400"
                >
                  https://github.com/jieunbin95/shoppingmall
                </a>
              </div>
              <div className="flex mb-3">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className="mr-[130px] text-2xl font-bold">URL</div>
                <a
                  href="https://golden-pastelito-a517d5.netlify.app/"
                  className="hover:text-slate-400"
                >
                  https://shopping.website.com
                </a>
              </div>
              <div className="flex">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className=" text-2xl font-bold mr-[80px]">UseSkills</div>
                <div className="font-semibold pt-2">
                  React / React Router / React-bootstrap
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <img src={shopping} alt="ipad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
