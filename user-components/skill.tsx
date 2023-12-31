"use client";
import React from "react";
import { motion } from "framer-motion";
import SingleSkill from "./singleSkill";

export default function Skill() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profieciency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <SingleSkill directionLeft={true}/>
        <SingleSkill directionLeft={false}/>
        <SingleSkill directionLeft={true}/>
        <SingleSkill directionLeft={false}/>
        <SingleSkill directionLeft={true}/>
        <SingleSkill directionLeft={false}/>
        <SingleSkill directionLeft={true}/>
        <SingleSkill directionLeft={false}/>
        <SingleSkill directionLeft={true}/>
        <SingleSkill directionLeft={false}/>
      </div>
    </motion.div>
  );
}
