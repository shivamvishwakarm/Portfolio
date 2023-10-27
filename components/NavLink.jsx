import React from "react";
import Image from "next/image";

export const NavLink = ({ImgLink, name, link}) => {

  return (
    <div className="flex items-center text-center justify-items-center p-4 gap-2">
      <Image src={ImgLink} width={30} height={30} alt={name}></Image>
      <a href={link}>
        <h3 className="underline font-bold">{name}</h3>
      </a>
    </div>
  );
};
