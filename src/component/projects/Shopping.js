import React from "react";
import shopping from "../../assets/쇼핑몰.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Shopping = () => {
  return (
    <div className="pb-40">
      <div className="mt-10 items-center xl:w-[80%] mx-auto ">
        <div className="px-4 py-5">
          <h3 className="text-3xl sm:text-5xl font-bold text-center p-4 mb-5">
            <span className="font-thin text-slate-300 mr-2">02.</span>
            ShoppingMall-Website
          </h3>
        </div>

        <div className="p-10 sm:p-2 md:relative md:left-5 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col mx-auto md:relative md:right-5 ">
            <p className="md:w-[450px] xl:w-[600px] mx-auto p-5 leading-10 text-ml border-b-2">
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

            <div className="mx-auto max-w-[600px] p-5 mt-5  grid-cols-1 grid sm:grid-cols-2">
              <div className="hidden sm:block text-2xl font-bold ">
                <div className="p-2  ">
                  <IoCheckmarkDoneSharp className="mr-2 inline-block" />
                  GitHub
                </div>

                <div className="p-2">
                  <IoCheckmarkDoneSharp className="mr-2 inline-block" />
                  URL
                </div>

                <div className="p-2 ">
                  <IoCheckmarkDoneSharp className="mr-2 inline-block" />
                  UseSkills
                </div>
              </div>

              <div>
                <div className="p-2">
                  <span className="sm:hidden block font-bold text-[18px] ">
                    &#x025B8;GitHub
                  </span>
                  <a
                    href="https://github.com/jieunbin95/iPad"
                    className="hover:text-slate-400 break-words"
                  >
                    https://github/jieunbin95/shopping
                  </a>
                </div>

                <div className="p-2 mt-2">
                  <span className="sm:hidden block font-bold text-[18px]">
                    &#x025B8;URL
                  </span>
                  <a
                    href="https://elaborate-medovik-0574d6.netlify.app/"
                    className="hover:text-slate-400 break-words"
                  >
                    https://shoppingmall.website.com
                  </a>
                </div>

                <div className="font-semibold p-2 mt-2">
                  <span className="sm:hidden block font-bold text-[18px]">
                    &#x025B8;UseSkills
                  </span>
                  React / React Router / React-bootstrap
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 ">
            <img src={shopping} alt="shopping" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
