"use client";

import { motion } from "framer-motion";

export default function Strategy() {
  const items = [
    "GameFi 🎮",
    "SoFi 🏠",
    "Hedge Funds 🐻",
    "VC Funds 💰",
    "Blockchains 🔗",
    "Public Goods 🌎",
    "dApps 📱",
  ];
  const items2 = [
    "Infrastructure Services 🏗️",
    "Wallets 🏦	",
    "NFTs 🖼️",
    "DeFi 💸",
    "VC Funds 💰",
    "GameFi 🎮",
    "Hedge Funds 🐻",
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
        duration: 1,
        delay: key * 0.1,
      },
    }),
  };
  return (
    <div
      className="padding py-16 lg:py-24 font-bold bg-white text-center"
      id="strategy"
    >
      <p className="text-2xl lg:text-[30px] w-full items-center justify-center gap-2 flex flex-wrap text-center">
        {"Delivering on-point deal flow and strategy across the Crypto space"
          .split(" ")
          .map((data, key) => (
            <motion.span
            key={key}
              variants={var1}
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
      <div className="flex text-[24px] lg:text-[27px] overflow-hidden whitespace-nowrap mt-10 lg:mt-14">
        <div className="flex animate1 items-center">
          {items.map((data, key) => (
            <div className="mx-10" key={key}>{data}</div>
          ))}
        </div>
        <div className="flex animate1 items-center">
          {items.map((data, key) => (
            <div className="mx-10" key={key}>{data}</div>
          ))}
        </div>
      </div>
      <div className="flex text-[24px] lg:text-[27px] overflow-hidden whitespace-nowrap mt-9 lg:mt-14">
        <div className="flex animate2 items-center">
          {items2.map((data, key) => (
            <div className="mx-10" key={key}>{data}</div>
          ))}
        </div>
        <div className="flex animate2 items-center">
          {items2.map((data, key) => (
            <div className="mx-10" key={key}>{data}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
