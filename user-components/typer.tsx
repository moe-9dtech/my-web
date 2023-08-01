"use client";
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {}

export default function Typer({}: Props) {
    const [text, count] = useTypewriter({
        words:["coffee, coding, chess", "<Next.js 13 website/>"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <h1>
        <span>{text}</span>
        <Cursor cursorColor='#D3FBD8'/>
    </h1>
  )
}