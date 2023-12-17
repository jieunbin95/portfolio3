import React from "react";
import supportImg from "../assets/support.jpeg";

const Support = () => {
  return (
    <section name="skill" className="w-full relative h-screen">
      <div className="w-full bg-slate-900/90 absolute">
        <img
          className="mix-blend-overlay w-full h-full"
          src={supportImg}
          alt="support_img"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="pb-5 px-4 pt-10 md:pb-5">
          <h3 className="pt-10 md:pt-20 text-5xl font-bold text-center">
            My Skills
          </h3>
        </div>

        <div className="grid grid-cols-1 md:pt-10 text-black lg:grid-cols-2 gap-x-8">
          <div className="bg-white shadow-2xl rounded-xl m-10 xl:m-0">
            <div className="p-5 md:p-8">
              <h3 className="text-3xl py-3 sm:py-6 sm:text-4xl font-bold">
                Language.
              </h3>
              <img
                className="h-[60px] shadow-2xl md:h-24 hover:scale-110 cursor-pointer transition-all hover:rounded-lg"
                alt="javascript"
                src="https://velog.velcdn.com/images/benis/post/08a48f90-535b-4e3e-8ca9-03848338438d/javascript%20(1).png"
              />

              <h3 className="text-3xl py-3 sm:py-6 sm:text-4xl font-bold">
                Markup.
              </h3>
              <img
                className="mb-2 h-20 shadow-2xl md:h-24 md:w-40 inline-block mr-3 hover:scale-110 cursor-pointer transition-all hover:rounded-lg"
                alt="html"
                src="https://velog.velcdn.com/images/lsx2003/post/672e0994-cc00-4da9-8753-3e0ffac36bb4/image.png"
              />
              <img
                alt="css"
                className="mb-2 h-20 shadow-2xl md:h-24 inline-block mr-3 hover:scale-110 cursor-pointer transition-all hover:rounded-lg"
                src="https://velog.velcdn.com/cloudflare/untiring_dev/65959c19-dca1-4470-a203-13fa34a3c3cf/css.png"
              />
              <img
                alt="scss"
                className="mb-2 h-20 w-[150px] shadow-2xl md:h-24 md:w-40 inline-block hover:scale-110 cursor-pointer transition-all hover:rounded-lg"
                src="https://images.velog.io/images/hsw7852/post/e4375544-3fb1-46d0-a493-dc21ecd947e0/scsslgoo.png"
              />
            </div>
          </div>

          <div className="bg-white shadow-2xl rounded-xl grid-cols-2 mx-10 xl:mx-0">
            <div className="p-5 md:p-8">
              <h3 className="text-[25px] py-2 sm:py-6 sm:text-4xl font-bold">
                Library/Framework.
              </h3>

              <img
                className=" shadow-2xl h-20 inline-block m-2 hover:scale-110 cursor-pointer transition-all hover:rounded-lg"
                alt="react"
                src="https://miro.medium.com/v2/resize:fit:1400/1*omjhQA7wTEfAAkKjwzRfsA.png"
              />
              <img
                alt="bootstrap"
                className="shadow-2xl h-20 inline-block m-2 hover:scale-110 cursor-pointer transition-all hover:rounded-lg"
                src="https://velog.velcdn.com/images/zooyaho/post/cad1eaea-155b-432b-9c82-7d43da51464b/image.jpg"
              />
              <img
                alt="material"
                className="shadow-2xl h-20 inline-block m-2 hover:scale-110 cursor-pointer transition-all hover:rounded-lg"
                src="https://miro.medium.com/v2/resize:fit:1200/1*fEyeESs-HxVR7Zlr-fdlvw.png"
              />
              <img
                alt="styled component"
                className="shadow-2xl h-20 inline-block m-2 hover:scale-110 cursor-pointer transition-all hover:rounded-lg"
                src="https://sujeitoprogramador.com/wp-content/uploads/2019/05/styled.png"
              />

              <img
                className="shadow-2xl h-20 inline-block m-2 hover:scale-110 cursor-pointer transition-all hover:rounded-lg border-2 w-[187px]"
                alt="redux"
                src="https://velog.velcdn.com/images/heyiminhye/post/5d1579c2-d1fe-4a23-984f-de1fbbea9c03/image.png"
              />
              <img
                alt="next.js"
                className="shadow-2xl h-20 inline-block m-2 hover:scale-110 cursor-pointer transition-all hover:rounded-lg "
                src="https://velog.velcdn.com/images/seeyong_0/post/7e454276-023f-48a6-8563-45a5f3a4b6dd/image.png"
              />
              <img
                alt="tailwind"
                className="shadow-2xl h-20 inline-block m-2 hover:scale-110 cursor-pointer transition-all hover:rounded-lg border-2"
                src="https://velog.velcdn.com/images/pjh1011409/post/3e29a608-ebcf-4de1-aabe-925f4b5517d9/image.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
