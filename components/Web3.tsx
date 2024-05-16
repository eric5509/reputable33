"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Web3() {
  const images = [
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/frontier.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/Pachira.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/Rollux.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/Self-chain.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/superdapp.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/Camada.svg",
    "https://altorisedev.wpengine.com/wp-content/uploads/2023/11/Bisonfund.svg",
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
        duration: .5,
        delay: key * 0.05,
      },
    }),
  };

  return (
    <div className="bg-neon text-white relative cursor  overflow-hidden py-16 text-center">
      <p className="text-[27px] font-bold flex-wrap text-center items-center justify-center w-full flex gap-2">
        {"We work with the leading Web3 projects like"
          .split(" ")
          .map((data, key) => (
            <motion.span
              variants={var1}
              key={key}
              viewport={{ once: true }}
              custom={key}
              initial="initial"
              whileInView="animate"
              className="inline-block"
            >
              {data}{" "}
            </motion.span>
          ))}
      </p>
      <div className="flex overflow-hidden mt-12 items-center">
        <div className="animate1 flex">
          {images.map((data) => (
            <div className="w-40 mx-5 bg-neon">
              <Image
                src={data}
                alt=""
                height={0}
                width={0}
                className="h-14 w-36 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="animate1 flex">
          {images.map((data) => (
            <div className="w-40 mx-5 bg-neon">
              <Image
                src={data}
                alt=""
                height={0}
                width={0}
                className="h-14 w-36 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
