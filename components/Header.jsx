import React, { memo } from "react";
import Image from "next/image";

const Header = () => {

  const Heading = "Hello, I'm Shivam Vishwakarma";

  const Intro = "Hello, I'm Shivam Vishwakarma, an undergraduate I.T. student at A.N College, Patna. My fascination with video games as a child evolved into a passion for understanding their inner workings. Upon entering A.N College, I immersed myself in BSc.IT and discovered the world of web development.  Throughout my college journey, I've actively contributed to open source, tackled freelance projects, and even secured a full-time web developer job, which I regrettably declined to prioritize my education. These experiences have revealed my potential in crafting full-stack web applications that push the boundaries of what's possible. I'm excited to showcase my work and share my journey in technology with you. Thank you for visiting my portfolio. Let's embark on this incredible journey together!";

  // flex-col md:flex-row lg:flex-row

  return (

    <div className="flex flex-col md:flex-row lg:flex-rowm-4 h-50">
      <div className="mx-2 w-fit		">
        <Image
          src="/shivam.png"
          width={400}
          height={400}
          className="w-auto h-auto border rounded-full border-4 border-black"
          alt="shivam"
        />
      </div>

      <div className="border-2 border-[#0365F9] rounded-lg p-9 mx-2 my-2 rounded bg-[#90AFEA] text-black drop-shadow-lg w-fit	">
        <h2 className="my-2 ">{Heading}</h2>
        <h3 className="my-4">
          {Intro}
        </h3>
      </div>
    </div>


  );
};



export default Header;
