import React from "react";
import disney from "../../assets/disney.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Disney = () => {
  return (
    <div className="pb-40">
      <div className="mt-10 items-center xl:w-[80%] mx-auto ">
        <div className="px-4 py-5">
          <h3 className="text-5xl font-bold text-center p-4 mb-5">
            <span className="font-thin text-slate-300 mr-2">03.</span>
            Disney-Website
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:relative md:left-5 p-5">
            <img src={disney} alt="ipad" />
          </div>

          <div className="md:relative md:left-5 flex flex-col mx-auto">
            <p className="md:w-[450px] xl:w-[600px] mx-auto p-5 leading-10 text-ml border-b-2">
              <span className="font-bold">
                React를 학습하며 제작한 영화 웹사이트입니다.
              </span>{" "}
              <br />
              Axios를 사용하여 API를 호출하여 서버와 통신해볼 수 있었다는 점에서
              의미가 있었습니다. Firebase의 인증 서비스를 처음 사용해 봄으로써
              서버없이 백엔드를 쉽게 구현할 수 있다는 점에서 편리함을 몸소
              체감할 수 있었습니다.
              <br />
              <br />
              Redux-toolkit를 통해 예측 가능한 상태관리를 지원하는 Flux 패턴의
              이점을 경험할 수 있었고, Styled-Components를 처음으로 사용해보며
              차별적인 유용성을 느낄 수 있었습니다.
            </p>

            <div className="p-5 mt-5  grid-cols-1 grid sm:grid-cols-2">
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
                  <a
                    href="https://github.com/jieunbin95/iPad"
                    className="hover:text-slate-400"
                  >
                    <span className="sm:hidden mr-6 font-bold text-[18px]">
                      &#x025B8;GitHub
                    </span>
                    https://github.com/jieunbin95/disney
                  </a>
                </div>

                <div className="p-2 mt-2">
                  <a
                    href="https://elaborate-medovik-0574d6.netlify.app/"
                    className="hover:text-slate-400"
                  >
                    <span className="sm:hidden mr-6 font-bold text-[18px]">
                      &#x025B8;URL
                    </span>
                    https://disney.website.com
                  </a>
                </div>

                <div className="font-semibold p-2 mt-2">
                  <span className="sm:hidden mr-6 font-bold text-[18px]">
                    &#x025B8;UseSkills
                  </span>
                  React / Redux-toolkit / Fire-Base / Styled-Components
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disney;
