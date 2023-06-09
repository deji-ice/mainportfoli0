import React from "react";
import { motion } from "framer-motion";
import logo from "Assets/react-js-icon.png";

import { images } from "@/data/mockData";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      {images.map((image, index) => (
      
        <Image
          key={index}
          // initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1.5 }}
          // viewport={{once:true}}
          className="h-16 w-16 xl:w-fit xl:h-24  md:h-28 md:w-28 object-cover filter 
      hover:grayscale transition duration-300 ease-in-out"
          src={image.src}
          alt={image.alt}
        />
        
      ))}
    </div>
  );
};

export default Skill;
