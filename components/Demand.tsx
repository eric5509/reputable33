"use client";
import Img5 from '@/assets/images/invest-growth-icon.png.webp'
import Img1 from '@/assets/images/growth-chart-icon.png.webp'
import Img3 from '@/assets/images/loyalty-icon.png.webp'
import Img4 from '@/assets/images/audit-icon.png.webp'
import Img2 from '@/assets/images/code-icon.png.webp'
import { motion } from "framer-motion";
import Image from "next/image";

export default function Demand() {
  const variantsParent = {
    initial: {},
    animate: {
      transition: {
        duration: .5,
        staggerChildren: 0.15,
      },
    },
  };

  const variantsChild = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: .5,
      },
    },
  };

  const details = [
    {
      image: Img1,
      title: '',
      text: ''
    },
    {
      image: Img1,
      title: 'Project growth engineering',
      text: "Integrate key marketing engineering strategies to increase usage and referrals.",
    
    },
    {
      image: Img2,
      title: 'Developer relations',
      text: 'We work with your dev-relations team to increase project adoption by developers'
    },
    {
      image: Img3,
      title: 'Investor strategy',
      text: 'Position your early-stage project and team effectively to attract the ideal investors.'
    },
    {
      image: Img4,
      title: 'Retention and loyalty',
      text: 'Get users to invite more users using growth hacks and incentive-driven levers.'
    },
    {
      image: Img5,
      title: 'Compliance audits',
      text: 'Marketing and finance audits to increase global compliance and reduce user friction.'
    },
  ]
  return (
    <div className="bg-amber-400 py-10 lg:py-16 padding" id="careers">
      <motion.div
        variants={variantsParent}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        className="grid parentContainer py-16 gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {details.map((data, key) => (
          <motion.div variants={variantsChild} className="" key={key}>
            {key === 0 ? (
              <div className="text-center sm:text-start flex flex-col items-center justify-center sm:items-start sm:justify-start">
                <p className="px-6 py-3 shadow text-sm border-2 rounded-full w-fit glass">
                  Expertise on-demand
                </p>
                <div className="hidden lg:block text-4xl mt-4">
                  <p>Crypto Growth</p>
                  <p>Consulting</p>
                  <p>Company</p>
                </div>
                <p className="text-2xl lg:hidden">Crypto Growth Consulting Company</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="h-12 w-12 border-2 border-white rounded-full glass">
                  <Image
                    alt=""
                    src={data.image}
                    unoptimized
                    height={0}
                    width={0}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl">{data.title}</p>
                <p className="text-sm text-black leading-snug">{data.text}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
