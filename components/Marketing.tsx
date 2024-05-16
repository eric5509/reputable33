"use client";
import Covalent from "@/assets/images/Covalent-BMB-Branding-thumbnail-565x600.jpg.webp";
import Frontier from "@/assets/images/Frontier-Pitch-Deck-565x600.jpg.webp";
import Sylabs from "@/assets/images/Syslabs-Pitch-deck-565x600.jpg.webp";
import Bison from "@/assets/images/Bison-branding-thumbnail.jpg.webp";
import { BsArrowRight } from "react-icons/bs";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Image from "next/image";

const myFont = localFont({ src: "../assets/fonts/Poppins-Bold.ttf" });

export default function Marketing() {
  const details = [
    {
      img: Bison,
      title: "Going bulliish on hedge fund branding",
      subtitle: "Branding",
    },
    {
      img: Covalent,
      title: "A crypto branding for an ecosystem campaign ",
      subtitle: "Branding",
    },
    {
      img: Frontier,
      title: "A high-impact pitch deck for a leading crypto wallet",
      subtitle: "Pitch Deck",
    },
    {
      img: Sylabs,
      title: "A pitch to fuel blockchain innovation",
      subtitle: "Pitch Deck",
    },
  ];

  const var1 = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: (key: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: key * 0.1,
      },
    }),
  };

  return (
    <div className="py-10 bg-black text-white padding" id="work">
      <div className="parentContainer">
        <div className="flex justify-between py-10 lg:py-14 text-center lg:text-start items-center">
          <p
            className={`font-bold flex gap-2 flex-wrap justify-center lg:text-start  text-center text-3xl sm:text-4xl lg:text-[44px] ${myFont.className}`}
          >
            {"Our recent crypto marketing work".split(" ").map((data, key) => (
              <motion.span
                variants={var1}
                key={key}
                viewport={{ once: true }}
                custom={key}
                initial="initial"
                whileInView="animate"
                className="inline-block"
              >
                {data}
              </motion.span>
            ))}
          </p>
          <div className="hidden cursor-pointer lg:flex text-base items-center gap-3">
            <p>Browse more</p>
            <BsArrowRight className="text-xl" />
          </div>
        </div>
        <div className="grid overflow-x-auto snap-mandatory snap-x duration-300 grid-flow-col auto-cols-[90%] sm:auto-cols-[70%] lg:auto-cols-[40%] gap-3 lg:gap-10">
          {details.map((data, key) => (
            <div className="snap-start duration-300" key={key}>
              <div className="h-[300px] lg:h-[400px] rounded-md overflow-hidden">
                <Image
                  src={data.img}
                  unoptimized
                  alt=""
                  height={0}
                  width={0}
                  className="h-full w-full duration-500 delay-200 hover:scale-110 object-cover"
                />
              </div>
              <div className="mt-2 ">
                <p className="font-semibold mb-1 leading-normal text-xl lg:text-[22px]">
                  {data.title}
                </p>
                <p className="text-lg lg:text-xl text-gray-600">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
