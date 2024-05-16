const myFont = localFont({ src: "../assets/fonts/GreatVibes-Regular.ttf"});
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { CgDollar } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { BiChat } from "react-icons/bi";
import localFont from "next/font/local";
import { PiPen } from "react-icons/pi";

type Props = {
  setDropdown: Dispatch<SetStateAction<boolean>>;
  dropdownOpened: boolean;
};

export default function Dropdown({ setDropdown, dropdownOpened }: Props) {
  const var1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
    exit: {
      opacity: 0,
      transition: {},
    },
  };

  return (
    <div className="">
      <AnimatePresence>
        {dropdownOpened && (
          <motion.div
            variants={var1}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`fixed origin-top py-20 text-gray-700 top-0 left-0 z-[40000000000] bg-white w-screen h-screen`}
          >
            <div className="parentContainer h-full w-full grid gap-10 grid-cols-2">
              <div className=" flex text-black flex-col justify-between">
                <p className="text-[120px] leading-none">
                  Drop us <span className={myFont.className}>a Message</span>
                </p>
                <p className="text-base">
                  If you value great marketing and design you should either
                  partner with us or join our team.
                </p>
                <div className="grid grid-cols-2">
                  <div className="flex flex-col gap-5">
                    <b>marketing accelerator</b>
                    <p>
                      If you would like to learn more about our marketing
                      accelerator for your business, contact Reputable founder &
                      CEO directly at
                    </p>
                    <p>ceo@Reputable.com</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <b>careers at Reputable</b>
                    <p>
                      We are always hiring passionate people. Please apply via
                      our websites careers section. Got questions for our hiring
                      team?
                    </p>
                    <p>careers@Reputable.com</p>
                  </div>
                </div>
              </div>
              <motion.div
                initial="initial"
                animate="animate"
                className=" w-full "
              >
                <FaTimes
                  onClick={() => setDropdown(false)}
                  className="absolute text-2xl cursor-pointer top-7 right-[75px] text-black duration-200 hover:text-[red] hover:scale-110 active:scale-95 z-[50000]"
                />
                <motion.div className="grid grid-cols-2 h-14 gap-5">
                  <div className="border-b flex items-center gap-2">
                    <BsPerson className="mx-1 text-2xl" />
                    <div className="h-full flex-1 ">
                      <input
                        type="text"
                        className="flex-1 bg-transparent outline-none w-full h-full"
                        placeholder="Whats your name?"
                      />
                    </div>
                  </div>
                  <div className="border-b flex items-center gap-2">
                    <MdOutlineEmail className="mx-1 text-2xl" />
                    <div className="h-full flex-1 ">
                      <input
                        type="text"
                        className="flex-1 bg-transparent outline-none w-full h-full"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                </motion.div>
                <div className=" w-full mt-5">
                  <motion.div className="grid grid-cols-2 h-14 gap-5">
                    <div className="border-b flex items-center gap-2">
                      <BiChat className="mx-1 text-2xl" />
                      <div className="h-full flex-1 ">
                        <input
                          type="text"
                          className="flex-1 bg-transparent outline-none w-full h-full"
                          placeholder="Select a discussion topic"
                        />
                      </div>
                    </div>
                    <div className="border-b flex items-center gap-2">
                      <CgDollar className="mx-1 text-2xl" />
                      <div className="h-full flex-1 ">
                        <input
                          type="text"
                          className="flex-1 bg-transparent outline-none w-full h-full"
                          placeholder="Whats you budget"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="h-64 mt-5 flex border-b gap-2">
                  <PiPen className="mx-1 text-2xl" />
                  <div className="h-full flex-1">
                    <textarea
                      name=""
                      className="h-full w-full  bg-transparent outline-none border-none"
                      placeholder="A brief description about your project/request/consultation "
                    ></textarea>
                  </div>
                </div>
                <p className="text-11 mt-8">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <span className="text-blue-600">Privacy Policy</span>
                  and <span className="text-blue-600">
                    Terms of Service
                  </span>{" "}
                  apply
                </p>
                <div className="flex mt-2 cursor-pointer group w-full justify-center  active:scale-90 hover:-translate-y-[3px] hover:shadow-xl duration-500 items-center text-white stroke-1 gap-2 px-5 lg:px-8 bg-black  text-lg py-4 lg:py-6">
                  <p className="group-hover:translate-x-1 duration-300 delay-100">
                    Send message
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
