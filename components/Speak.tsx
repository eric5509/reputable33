"use client";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Speak() {
  const variantsParent = {
    initial: {},
    animate: {
      transition: {
        duration: 1,
        staggerChildren: 0.25,
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
        duration: 1,
      },
    },
  };

  const image = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="bg-[#010C11] text-white py-16 lg:py-24 padding ">
      <div className="grid parentContainer grid-cols-1 md:grid-cols-2 gap-12 lg:gap-5">
        <motion.div
          variants={variantsParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center md:items-start md:text-start gap-10 sm:gap-16 justify-between"
        >
          <div className="">
            <motion.p
              viewport={{ once: true }}
              variants={variantsChild}
              className="text-3xl lg:text-4xl mb-4 font-semibold"
            >
              Speak to us today
            </motion.p>
            <motion.p variants={variantsChild} viewport={{ once: true }}>
              Hop on a call with our team and learn how we can solve your <br />{" "}
              crypto marketing and design needs.
            </motion.p>
          </div>
          <div className="flex flex-col gap-2">
            <motion.div
              variants={variantsChild}
              viewport={{ once: true }}
              className="h-56 w-56 overflow-hidden rounded-xl"
            >
              {/* <Image
                alt=""
                unoptimized
                width={0}
                height={0}
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXGxICs0sQodC0AqsjE5TeR28Zs3ejfsnYbd-FGGgFQ&s`}
                className="h-full w-full object-cover"
              /> */}
            </motion.div>
            <motion.p
              viewport={{ once: true }}
              variants={variantsChild}
              className="font-bold text-xl"
            >
              
            </motion.p>
            <motion.p viewport={{ once: true }} variants={variantsChild}>
              Founder and CEO at <b>Reputable</b>
            </motion.p>
            <motion.p viewport={{ once: true }} variants={variantsChild}>
              (Location, Head Office)
            </motion.p>
            <motion.div
              viewport={{ once: true }}
              variants={variantsChild}
              className="flex justify-center md:justify-start items-center gap-3"
            >
              <div className="h-10 w-10 text-xl duration-300 hover:border-blue-500 hover:text-blue-500 border border-white rounded-full center">
                <BsTelegram className="cursor-pointer"/>
              </div>
              <div className="h-10 w-10 text-xl duration-300 hover:border-blue-500 hover:text-blue-500 border border-white rounded-full center">
                <BsLinkedin className="cursor-pointer"/>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="sm:px-10 lg:px-0">
          <motion.div
            variants={image}
            initial="initial"
            animate="animate"
            className="h-full min-h-80 bg-white overflow-hidden relative rounded-2xl"
          >
            <Image
              src={
                "https://images.pexels.com/photos/8358144/pexels-photo-8358144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              height={0}
              width={0}
              className="absolute top-0 left-0 h-full w-full object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
