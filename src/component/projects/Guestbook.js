import React from "react";
import ReactPlayer from "react-player";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Guestbook = () => {
  return (
    <div className="max-w-[1540px] mx-auto pb-40 pt-10">
      <div className="mt-10 items-center w-[80%] mx-auto">
        <div className="px-4 py-5">
          <h3 className="text-5xl font-bold text-center p-4 mb-5">
            <span className="font-thin text-slate-300 mr-2">05.</span>
            GuestBook
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <ReactPlayer
              url={process.env.PUBLIC_URL + "/videos/guest.mp4"}
              width="700px"
              height="600px"
              playing={true}
              muted={true}
              loop={true}
            />
          </div>

          <div className="flex flex-col mx-auto">
            <p className=" w-[600px] mx-auto py-7 px-2 leading-10 text-ml">
              <span className="font-bold">
                숙박 후 방문객이 후기를 남길 수 있도록 만든 방명록 웹사이트
                입니다.
              </span>{" "}
              <br />
              방명록 올리기, 방명록 수정하기, 방명록 삭제하기의 기능을
              구현하였습니다.
              <br />
              <br />
              Next.js를 이용해 웹사이트를 만들면서 CSR, SSR, SSG에 대한 개념을
              확실하게 숙지 할 수 있었으며, 검색엔진최적화(SEO)와 UI구상에 많은
              노력을 들였습니다. 다만 아쉬웠던 점은 Next.js를 통한 도전적
              과제로서 프로젝트에 적용하였으나, 서버구축을 위한 Custom Express
              Server가 아닌 단순히 Json-Server를 이용했다는 점과 배포에 미숙했던
              점입니다.
            </p>

            <hr />

            <div className="p-5 mt-5">
              <div className="flex mb-3">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className="mr-[120px] text-2xl font-bold mb-4 ">
                  GitHub
                </div>
                <a
                  href="https://github.com/jieunbin95/guest_book"
                  className="hover:text-slate-400"
                >
                  https://github.com/jieunbin95/guestbook
                </a>
              </div>

              <div className="flex">
                <IoCheckmarkDoneSharp className="text-2xl mr-2" />
                <div className=" text-2xl font-bold mr-[100px]">UseSkills</div>
                <div className="font-semibold pt-2">Next.js / Json-Server</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guestbook;
