import React, { memo } from "react";
import Image from "next/image";

const Header = () => {

  const Heading = "Hello, I'm Shivam Vishwakarma";

  const Intro = "I'm a self-taught programmer and full-stack web developer. Explore my portfolio to see my work with HTML5, CSS JavaScript, React.js,Next.js, APIs, and MongoDB. Welcome to my digital world!";


  return (

    <div className="flex flex-col md:flex-row lg:flex-row m-4 h-50">
      <div className="mx-2">
        <Image
          src="/shivam.png"
          width={400}
          height={400}
          className="w-auto h-auto border rounded-full border-4 border-black"
          alt="shivam"
        />
      </div>

      <div className="border-2 border-[#0365F9] rounded-lg p-9 mx-2 my-2 rounded bg-[#90AFEA] text-black drop-shadow-lg">
        <h2 className="my-2 ">{Heading}</h2>
        <h3 className="my-4">
          {Intro}
        </h3>
      </div>
    </div>
    

  );
};



export default Header;
