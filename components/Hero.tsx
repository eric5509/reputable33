"use client";
const myFont = localFont({ src: "../assets/fonts/Poppins-ExtraBold.ttf" });
import Heroo from "@/assets/images/heroo.png";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

// 09168590479
// 09165155225

export default function Hero() {
  const fullstack = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const fullstack1 = {
    initial: {
      opacity: 0,
      y: 40,
      scaleY: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const varr = {
    initial: {
      opacity: 0,
      y: 30,
    },  
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="lg:min-h-screen relative">
      <div className="h-96 w-96 absolute top-40 left-10 filter blur-[300px] z-[-1] bg-[yellow]"></div>
      <div className="h-96 w-96 absolute top-40 right-10 z-[-1] filter blur-[450px] bg-[red]"></div>
      <div className="lg:min-h-screen parentContainer grid grid-cols-1 gap-10 lg:grid-cols-[1fr_.75fr] xl:grid-cols-2">
        <div className="flex justify-end mt-24 lg:mt-0 items-center padding lg:h-full lg:items-start text-center lg:text-start flex-col">
          <motion.p
            variants={fullstack}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="font-bold text-black mb-1 text-3xl lg:text-5xl"
          >
            Meet your full
          </motion.p>
          <motion.p
            variants={fullstack1}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`textGradient font-[800] text-3xl lg:text-[52px] leading-tight ${myFont.className}`}
          >
            LAUNCH SUPPORT
          </motion.p>
          <motion.p
            variants={fullstack1}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`textGradient2 font-[800] text-3xl lg:text-[52px] leading-snug ${myFont.className}`}
          >
            PARTNER
          </motion.p>
          <div className="w-[90%] mt-3 lg:mt-6">
            <motion.p
              variants={fullstack1}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-sm"
            >
              We help promisiry early stage projects grow from rods in an everchanging crypto ecosystem. Our launch model offers full time support to project teams who are shaping the decentralized future of Web3.
            </motion.p>
          </div>
          <div className="w-[90%] mt-3">
            <motion.p
              variants={fullstack1}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-sm"
            >
             We do this by bringing together decades of experience, technology and expertise, giving you on-demand to the market.
            </motion.p>
          </div>
          <motion.div
            variants={fullstack1}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex lg:mb-5 flex-col lg:flex-row items-center gap-6 lg:gap-12 mt-5 lg:mt-10"
          >
            <Button text="Message us on Telegram" />
            <p className="border-b-2 text-[blue] text-base cursor-pointer border-blue-500 pb-1">
              or Book a meeting
            </p>
          </motion.div>
        </div>
        <div className="relative h-80 lg:h-full center">
          <motion.div
            variants={varr}
            initial="initial"
            whileInView="animate"
            className="h-fit w-fit"
          >
            <Image
              src={Heroo}
              alt=""
              height={0}
              width={0}
              className="h-[450px] w-[450px] duration-300 hover:-translate-y-3 object-cover "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
