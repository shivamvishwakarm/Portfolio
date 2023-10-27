"use client";
import React from "react";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";

export const Nav = () => {
  const [mobileNav, setMobileNav] = React.useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  if (mobileNav) return <MobileNav handleNav={handleNav} />;

  return (
    <div className="fixed ">
      <Image
        className="lg:hidden cursor-pointer z-40 fixed right-0"
        src={"/menu.svg"}
        width={50}
        height={50}
        alt=""
        onClick={handleNav}
      />
      <aside className=" hidden lg:flex flex-col bg-[#5376CE] items-center h-screen relative w-full">
        <div className="my-4">
          <h1 className="underline font-mono">Hii, Welcome</h1>
        </div>
        <nav className="flex flex-col justify-center">
          {" "}
          {/* Use flex-col for small screens */}
          <div>
            {/* Navigation Link */}
            <NavLink link={"/"} ImgLink={"/home.svg"} name={"Home"} />

            <NavLink link={"/"} ImgLink={"/project-30.svg"} name={"Project"} />

            <NavLink
              link={
                "https://drive.google.com/file/d/1YnvRVPBSFeadSKlgB2CvLrmg4GQ3mlKF/view?usp=sharing"
              }
              ImgLink={"/cv.svg"}
              name={"CV"}
            />
            <NavLink
              link={"mailto:vishwakarmashivam2003@gmail.com"}
              ImgLink={"/contact.svg"}
              name={"Contact"}
            />
            {/* Add more links as needed */}
          </div>
        </nav>
        <div className="w-full md:w-[70%]">
          {" "}
          {/* Use full width for small screens */}
          <hr className="border-1 border-black" />
        </div>
        <div className="flex flex-row my-4">
          <a href="https://github.com/shivamvishwakarm" target="_blank">
            <Image src={"/github.svg"} width={40} height={40} className="m-2"  alt="social"/>
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <Image
              src={"/linkedin.png"}
              width={40}
              height={40}
              className="m-2" alt="social"
            />
          </a>
          <a href="https://x.com" target="_blank">
            <Image
              src={"/twitter.png"}
              width={40}
              height={40}
              className="m-2" alt="social"
            />
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Nav;
