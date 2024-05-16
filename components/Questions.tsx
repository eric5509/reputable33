"use client";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Questions() {
  const [opened, setOpened] = useState(100);

  const variantsParent = {
    initial: {},
    animate: {
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const variantsChild = {
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

  const data = [
    [
      "What is a crypto marketing agency",
      "A crypto marketing agency specializes in elevating businesses in the crypto and blockchain industry by leveraging their deep understanding of the crypto market and effectively engaging global crypto audiences. Their expertise enables them to attract customers and increase visibility, ultimately helping businesses to achieve their objectives.",
    ],
    [
      "How much do crypto marketing agency charge",
      "Marketing in the crypto industry is unlike any other field. It requires a deep understanding of the technology and the ability to navigate the constantly changing landscape of regulations and investor sentiment. We charge businesses according to the requirements of the deliverable needed to support their tailored marketing plan. We also have the latest tools & technology allowing us to make data-driven decisions to optimize efforts & drive growth.",
    ],
    [
      "Why should you hire a crypto/web3 marketing company",
      "A dedicated cryptocurrency marketing agency has the expertise and experience to develop and execute a comprehensive and cost-effective marketing strategy that will effectively reach and engage your target audience. By working with us, you can rest assured that your marketing efforts are in the hands of experts who stay up-to-date on the latest industry trends and best practices.",
    ],
    [
      "What kind of crypto marketing services does Branch chain provide",
      "We are a full-service crypto marketing service provider. Reputable provides a variety of services that aim to build brand awareness, acquire customers, increase return customers, and improve sales for businesses in the cryptocurrency industry. These services include tactics such as social media marketing, content creation, community management, Twitter management, email marketing, search engine optimization, paid advertising, influencer marketing, public relations, and many more.",
    ],
    [
      "Why should i choose Brancchain for our crypto marketing and advertising",
      "At Reputable, we understand that your success is our success. That's why we take a hands-on approach with every project we work on, treating it as if it were our own. Our team is dedicated to meeting and exceeding your business goals, and we are fully invested in ensuring that your project is a success.",
    ],
    [
      "How do you build a thriving crypto community for us",
      "We offer a comprehensive approach to building a thriving crypto community for your business. This includes creating a dedicated online platform for community interaction and engagement, hosting events and meetups, producing and sharing valuable content, encouraging community engagement through interactive activities, providing excellent customer support, and leveraging influencers and early adopters in the crypto space to promote your business and grow your community.",
    ],
  ];
  return (
    <div className="bg-white padding tracking-wide py-28">
      <div className=" px-0 sm:px-20 md:px-36 xl:px-56 ">
        <div className="flex flex-col parentContainer items-center justify-center">
          <p className="px-5 bg-gradient-to-r from-[#fdc8e2] to-[#fddeb2] rounded-full mb-4 py-3">
            Your crypto marketing questions answered
          </p>
          <p className="text-center lg:text-start text-2xl lg:text-3xl font-semibold my-6">
            Frequently Asked Questions
          </p>
          <div className="text-sm leading-loose text-center">
            <p>
              From engagement models, to timezones and industries, we’ve
              compiled some of our responses here. Though, we always prefer a
              conversation over a ☕️ anyday —{" "}
              <span className="text-blue-500">set up a meeting today!</span>
            </p>
          </div>
          <motion.div
            variants={variantsParent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex w-full mt-16 flex-col gap-4"
          >
            {data.map((item, key) => (
              <motion.div
                key={key}
                variants={variantsChild}
                viewport={{ once: true }}
                className={`flex w-full ${
                  opened === key && "text-blue-600"
                } cursor-pointer border-b  gap-5 justify-between `}
                onClick={() => {
                  if (opened === key) {
                    setOpened(100);
                  } else {
                    setOpened(key);
                  }
                }}
              >
                <p className="hidden duration-300 sm:block text-xl lg:text-2xl font-semibold">
                  0{key + 1}
                </p>
                <div className="flex-1">
                  <p className="text-lg duration-300 lg:text-xl font-semibold">
                    {item[0]}
                  </p>
                  <div
                    className={`grid mt-5 overflow-hidden duration-500 ease-in-out ${
                      opened === key
                        ? "grid-rows-[1fr] pb-5 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="text-sm duration-300 text-black leading-relaxed overflow-hidden">
                      {item[1]}
                    </p>
                  </div>
                </div>
                <div className="text-xl duration-300 lg:text-2xl">
                  {opened !== key ? <BsPlus /> : <BiMinus />}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
