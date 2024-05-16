"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { HiOutlineChat } from "react-icons/hi";
import Logo from "@/assets/images/logo.png";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
  const links = ["home", "about", "strategy", "work", "blog", "careers", "due deligence"];
  const [isOpen, setOpen] = useState(false);
  const [over100, setOver100] = useState(false);
  const router = useRouter()
  const [active, setActive] = useState(10);
  const [dropdownOpened, setDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setOver100(true);
      } else {
        setOver100(false);
      }
    });
  }, [over100]);

  const var1 = {
    animate: {
      transition: {
        staggerDirection: 1,
        staggerChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerDirection: -1,
        staggerChildren: 0.1,
      },
    },
  };

  const var2 = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="">
      <div
        className={`fixed h-20 duration-300 border-b-2 ${
          over100 ? "glass1 text-white border-gray-300" : "border-transparent bg-transparent"
        } z-[20000] px-3 flex items-center  w-screen top-0 left-0`}
      >
        <div className="parentContainer flex justify-between items-center">
          <Link href={'/'} className="flex items-center gap-3">
            <Image
              alt=""
              src={Logo}
              height={0}
              width={0}
              className="h-9 w-9 lg:h-12 lg:w-12 object-cover"
            />
            <p className="text-xl font-bold">Reputable</p>
          </Link>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-5">
              <div className="flex text-base capitalize items-center gap-7">
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={var1}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="hidden lg:flex gap-7"
                    >
                      {links.map((data, key) => (
                        <motion.div variants={var2} key={key} className="">
                          <p
                            onMouseEnter={() => setActive(key)}
                            onMouseLeave={() => setActive(10)}
                            className={`cursor-pointer ${over100 ? 'hover:text-white' : 'hover:text-black'}  duration-500 ${
                              active === key && "opacity-100"
                            } ${active === 10 && "opacity-100"} ${
                              active !== key && active !== 10 && "opacity-40"
                            }`}
                            onClick={() => {
                              if(key === 6){
                                router.push('/dd')
                              }else{
                                router.push(`/#${data}`)
                              }
                            }}
                          >
                            {data}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div onClick={() => setOpen(!isOpen)} className="flex items-center gap-2 cursor-pointer">
                  <p className="cursor-pointer hidden lg:block">Menu</p>
                  <motion.div className="h-14 w-14 active:scale-90 duration-300 hover:text-black hover:bg-white center rounded-full">
                    <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
                  </motion.div>
                </div>
              </div>
            </div>
            <div
              onClick={() => setDropdown(true)}
              className="hidden cursor-pointer lg:flex items-center gap-3"
            >
              <p className="text-sm">Let's talk</p>
              <div className="h-14 w-14 border-2 drop-shadow-md hover:drop-shadow-lg text-[#c98e0c] rounded-full bg-white border-[#c98e0c] center">
                <HiOutlineChat className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dropdown setDropdown={setDropdown} dropdownOpened={dropdownOpened} />
      <div
        className={`lg:hidden navHeight fixed duration-700 ease-in-out z-[10000] left-0 bg-white w-screen ${
          isOpen ? "top-20" : "-top-[150vh]"
        }`}
      >
        <div className="flex flex-col text-base capitalize items-center gap-7">
          <div className="flex flex-col text-center mt-5 text-lg gap-7">
            {links.map((data, key) => (
              <motion.div className="" onClick={() => setOpen(false)}>
                <Link className="cursor-pointer" href={`#${data}`}>
                  {data}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <p
        className={`fixed top-1/2 -translate-y-1/2 left-5 text-base z-[500000000] vertical-lr text-black `}
      >
        hi@reputable.com
      </p>

      
    </div>
  );
}
