"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import developerImage from "@/app/assets/titan.jpg";
import developerImage from "../public/assets/titan.jpg";
type Props = {};

export default function AboutImage({}: Props) {
  return (
    <>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // viewport={{once:true}} // this preventing animation from repeating on scroll
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          className="mt-[150px] md:mt-0 flex-shrink-0 object-cover rounded-full h-56 w-56 md:w-64 md:h-96 md:rounded-lg xl:w-[500px] xl:h-[600px]"
          src={developerImage}
          height={300}
          width={300}
          alt="about image"
        />
        {/* <img className="mt-[150px] md:mt-0 flex-shrink-0 object-cover rounded-full h-56 w-56 md:h-95 md:w-64 md:rounded-lg xl:w-[500px] xl:h-[600px]" src="/assets/titan.jpg" alt="" /> */}
      </motion.div>
      <motion.div
      initial={{
        y: 50,
        opacity: 0
      }}
      whileInView={{
        y:0,
        opacity: 1
      }}
      transition={{duration: 1.2}}
       className="space-y-10 px-0 md:px-10 md:w-[70%]">
        <h4 className="text-4xl font-semibold">here is a <span className="underline decoration-[#00C6CF]/50">little</span> background about me</h4>
        <p className="text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id felis et turpis iaculis interdum quis quis diam. Praesent mauris sem, lobortis sed semper ut, pulvinar at urna. Nunc tincidunt purus lorem, vel facilisis orci venenatis vel. Proin dapibus erat risus, non sollicitudin ex sagittis ut. Phasellus hendrerit accumsan ex, eget lobortis nulla consectetur vitae.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id felis et turpis iaculis interdum quis quis diam. Praesent mauris sem, lobortis sed semper ut, pulvinar at urna. Nunc tincidunt purus lorem, vel facilisis orci venenatis vel. Proin dapibus erat risus, non sollicitudin ex sagittis ut. Phasellus hendrerit accumsan ex, eget lobortis nulla consectetur vitae.
        </p>
      </motion.div>
    </>
  );
}
