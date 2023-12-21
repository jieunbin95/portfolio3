import React from "react";
import youtube from "../../assets/youtube.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Youtube = () => {
  return (
    <div className="pb-40">
      <div className="mt-10 items-center xl:w-[80%] mx-auto ">
        <div className="px-4 py-5">
          <h3 className="text-3xl sm:text-5xl font-bold text-center p-4 mb-5">
            <span className="font-thin text-slate-300 mr-2">06.</span>
            Youtube
          </h3>
        </div>

        <div className="p-10 sm:p-2 md:relative md:left-5 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col mx-auto md:relative md:right-5">
            <p className="md:w-[450px] xl:w-[600px] mx-auto p-5 leading-10 text-ml border-b-2">
              <span className="font-bold">
                Youtube 홈페이지를 참고하여 만든 웹사이트입니다.
              </span>{" "}
              <br />
              Vite를 이용하여 빌드속도나 새로운 코드를 적용했을 때의 반영속도를
              몸소 체감 할 수 있었으며, 처음에는 낯설었지만 익숙해질수록 굉장히
              매력적이라는 생각이 들었습니다.
              <br />
              <br />
              작업이 크고 복잡해질 수록 기존의 CSS의 코드작성이나 유지보수에
              어려움이 발생하는 문제점을 SASS(SCSS)를 이용함으로써 가독성과
              재사용성을 높여주었고, 어떤 차이가 있는지 직접 사용해보면며 느낄
              수 있었습니다.
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
                  <span className="sm:hidden block font-bold text-[18px]">
                    &#x025B8;GitHub
                  </span>
                  <a
                    href="https://github.com/jieunbin95/react-sass-youtube"
                    className="hover:text-slate-400 break-words"
                  >
                    https://github/jieunbin95/youtube
                  </a>
                </div>

                <div className="p-2 mt-2">
                  <span className="sm:hidden block font-bold text-[18px]">
                    &#x025B8;URL
                  </span>
                  <a
                    href="https://clinquant-crumble-647cd3.netlify.app/"
                    className="hover:text-slate-400 break-words"
                  >
                    https://youtube.website.com
                  </a>
                </div>

                <div className="font-semibold p-2 mt-2">
                  <span className="sm:hidden block font-bold text-[18px]">
                    &#x025B8;UseSkills
                  </span>
                  React / SASS(SCSS) / Vite / Axios
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <img src={youtube} alt="ipad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
