"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import developerImage from "../public/assets/9d logo.jpeg";

type Props = {};

export default function Project({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5}}
       className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
          <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
          
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
            initial={{
              y: -300,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{duration: 1.5}}
            // viewport={{once: true}}
            >
              <Image
                src={developerImage}
                height={666}
                width={375}
                alt="project logo"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#00C6CF]/70">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>
              <p className="text-lg text-justify md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                id felis et turpis iaculis interdum quis quis diam. Praesent
                mauris sem, lobortis sed semper ut, pulvinar at urna. Nunc
                tincidunt purus lorem, vel facilisis orci venenatis vel. Proin
                dapibus erat risus, non sollicitudin ex sagittis ut. Phasellus
                hendrerit accumsan ex, eget lobortis nulla consectetur vitae.
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        ))}
        </div>
      <div className="w-full absolute top-[30%] bg-[#00C6CF]/10 left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
  );
}
