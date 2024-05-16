"use client";
const myFont = localFont({ src: "../assets/fonts/Poppins-Regular.ttf" });
const myFont2 = localFont({ src: "../assets/fonts/Poppins-Bold.ttf" });
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Deliver() {
  const data = [
    [
      "VERIFY",
      "Study &",
      "Verification",
      "Our first step involves getting an in-depth understanding of your crypto project as a potential client and partner. From initial coin offerings or a new blockchain technology launch, we also verify the team and project to ensure the success of any marketing initiative.",
    ],
    [
      "STUDY",
      "Core Growth ",
      "Metrics",
      "The key to building successful crypto businesses is to focus on attracting the ideal target audience, crypto investors who share your vision, and keeping that focus at the heart of your marketing plan. We work with you to set these essential business goals.",
    ],
    [
      "BRAINSTORM",
      "Channel",
      "Activation",
      "Our first step involves getting an in-depth understanding of your crypto project as a potential client and partner. From initial coin offerings or a new blockchain technology launch, we also verify the team and project to ensure the success of any marketing initiative.",
    ],

    [
      "DESIGN",
      "Launch PR &",
      "Promotions",
      "Our first step involves getting an in-depth understanding of your crypto project as a potential client and partner. From initial coin offerings or a new blockchain technology launch, we also verify the team and project to ensure the success of any marketing initiative.",
    ],
    [
      "DEPLOY",
      "Building",
      "Community",
      "Blockchain companies that build strong communities create powerful avenues for increased trading volumes, unique active wallets, and more key metrics. We will use platforms like Discord and Telegram to build your blockchain community and grow organic traffic.",
    ],
    [
      "IMPROVE",
      "Sustainable ",
      "Scaling",
      "We work across your existing teams. To engineer marketing success, we'll take ownership of high-quality content creation, regular press releases, developing quality content, and executing advertising campaigns to maximize consistent  ",
    ],
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
        delay: key * 0.15,
      },
    }),
  };

  return (
    <div
      className={`padding bg-black py-20 ${myFont.className}`}
      id="about"
    >
      <div className="parentContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 sm:gap-y-20 lg:gap-y-28">
        {data.map((item, key) => (
          <motion.div
            key={key}
            variants={var1}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            custom={key}
            className="flex flex-col gap-4"
          >
            <div className="flex bg-black text-white relative flex-col">
              <p>{item[0]}</p>
              <div className="text-2xl flex lg:flex-col gap-2 lg:gap-0 lg:text-3xl font-semibold mt-3">
                <motion.p className="">{item[1]}</motion.p>
                <motion.p className="">{item[2]}</motion.p>
              </div>
              <p
                className={`absolute -bottom-5 right-0 font-[900] textGradient3 text-[100px] lg:text-[150px] leading-none ${myFont2.className}`}
              >
                {key + 1}
              </p>
            </div>
            <p className="text-sm text-gray-100">{item[3]}</p>
          </motion.div>
        ))}
      </div>
      <div className="center mt-16">
        <Button text="Schedule a call"/>
      </div>
    </div>
  );
}
