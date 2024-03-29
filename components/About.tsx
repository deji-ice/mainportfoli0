/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import ayodejiatanda from "Assets/download (2) (1) Cropped.jpg";
import Image from "next/image";

type Props = {};

const About = ({}: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{ opacity:1}}
    viewport={{ once: true }}
    transition={{duration: 1.5}}
      className=" flex flex-col px-8 md:px-20 pt-20 max-w-7xl xl:mx-10 "
    >
      <h2 className="text-3xl mb-10 text-center md:text-5xl xl:text-3xl md:mb-[6rem] 
      font-semibold uppercase text-gray-500 font-programme">Persona Blurb</h2>
      <div className="flex flex-col space-y-10 items-center lg:items-start lg:flex-row lg:space-x-20">
        <Image
          src={ayodejiatanda}
          alt="Ayodeji Atanda's portrait"
          height={300}
          width={300}  
          className="border-dashed border-2 border-gray-400 "
        />
        <div className="text-base lg:text-xl">
        <div className="flex flex-col space-y-2 lg:items-start ">
          <p className=" mb-4">
            Hey there! I'm <strong className="underline">Ayodeji</strong>, a passionate web developer with a knack for
            creating visually stunning designs that captivate audiences. I
            believe that great design should be accessible to everyone, and
            that's what drives me to craft user-friendly websites that leave a
            lasting impression.
          </p>
          <p className="mb-4">
            By day, I'm a dedicated full-stack web developer, leveraging my 2
            years of experience in the field to bring innovative solutions to
            life. I enjoy the dynamic nature of my work, constantly pushing
            boundaries to deliver seamless experiences and optimize websites for
            better search engine visibility.
          </p>
          <p className="mb-4">
            Beyond the realm of code and design, I find joy in the simple
            pleasures of life. Music is a passion of mine, serving as a constant
            source of inspiration and motivation throughout my creative journey.
            And when I'm not coding or designing, you can find me enjoying the
            refreshing embrace of the water, as swimming provides me with the
            perfect outlet for relaxation and rejuvenation.
          </p>
        </div>

        <div className="mt-1">
          <p>Here are a few technologies i work with:</p>
          <ul className="grid grid-cols-2 list-disc px-5 mt-5">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>NextJS </li>
            <li>GSAP</li>
            <li>Firebase</li>
          </ul>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
