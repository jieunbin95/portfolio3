import React from "react";
import "./about.css";

const About = () => {
  return (
    <section name="about" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center p-4 max-w-screen-lg mx-auto">
        <div className="text-center mt-10 ">
          <h1 className="text-5xl font-bold md:pt-20">About Me</h1>
          <p className="py-6 text-2xl text-gray-500">
            &#x0201C; 문제해결 능력을 키워 보다 더 나은 프론트엔드 개발자로
            성장하고 싶습니다 &#x0201D;
          </p>
        </div>

        <div className="md:mt-10 md:mb-10 md:text-2xl ">
          <span>
            &#x022EE; Name <span className="ml-[410px] ">빈지은</span>
          </span>
          <br />
          <span>
            &#x022EE; Number <span className="ml-[350px]">010.3125.4831</span>
          </span>
          <br />
          <span>
            &#x022EE; Certificates
            <span className="ml-[290px] text-lg">패스트캠프 교육과정 수료</span>
            <span className="ml-[380px] text-lg">
              스파르타코딩클럽 웹개발 종합반 수료
            </span>
            <span className="ml-[420px] text-lg">
              모바일 반응형 웹 9기 수료
            </span>
          </span>
        </div>

        <br />

        <p className="text-md md:text-xl pb-[10px] border-b-[4px]">
          <span className="main_text font-semibold">
            안녕하세요 프론트엔드 개발자 빈지은 입니다.
          </span>{" "}
          <br />
          <p className="pt-2">
            다양한 프로젝트를 진행하면서 웹 개발에 대한 전반적인 프로세스를
            이해하고 습득하였습니다. <br />
            개발을 하면서 사용자에게 더 좋은 서비스를 생각하며 늘 사용자의
            관점에서 생각하고 개발하고 있습니다. <br />
            거창한 업무성과보다는 사용자의 작은 문제에도 끝까지 몰입하는
            신입개발자입니다.
          </p>
        </p>
      </div>
    </section>
  );
};

export default About;
