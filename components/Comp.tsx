"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  text: string;
  img: StaticImageData;
  position: string;
  gradient: string;
};

export default function Comp({
  title,
  subtitle,
  text,
  img,
  position,
  gradient,
}: Props) {
  const parent = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const variant1 = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: (key: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <div
      className={`block md:flex bg-white  items-center shadow-lg shadow-gray-500 p-5 sm:p-8 md:p-8 lg:p-12 gap-10 rounded-3xl max-w-[1000px] mx-auto ${
        position === "right" ? "lg:flex-row " : "lg:flex-row-reverse"
      }`}
    >
      <motion.div
        variants={parent}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="lg:flex-1"
      >
        <motion.div
          viewport={{ once: true }}
          variants={variant1}
          style={{ backgroundImage: `${gradient}` }}
          className="font-semibold text-white px-4 py-3 rounded-full w-fit"
        >
          <p>{subtitle}</p>
        </motion.div>
        <motion.p
          viewport={{ once: true }}
          variants={variant1}
          className="text-2xl lg:text-3xl font-semibold mt-6 mb-4"
        >
          {title}
        </motion.p>
        <motion.p variants={variant1} className="leading-relaxed text-sm text-gray-500">
          {text}
        </motion.p>
      </motion.div>
      <div className="lg:flex-1 mt-10 lg:mt-0 h-[350px]">
        <div className=" w-full relative h-full overflow-hidden rounded-xl">
          <Image
            src={img}
            alt=""
            height={0}
            width={0}
            className="h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-300 delay-200 hover:scale-110 w-full object-cover"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
