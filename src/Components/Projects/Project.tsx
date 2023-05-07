import Link from "next/link";
import React, { useEffect } from "react";
import Button from "../Reusable/Button";
import { projects } from "@/utils/data";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface Props {}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { scale: 0, x: 500 },
  visible: { scale: 1, x: 0, transition: { duration: 10 } },
};

const Project = (props: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <section className="bg-sec ">
      <div className="screen-center text-ter flex flex-col gap-10 h-full py-10">
        <h2 className="text-center h2 font-bold">Featured Projects</h2>
        <motion.div
          // variants={container}
          // initial="hidden"
          // animate="show"
          className="flex flex-col gap-10 md:gap-20 "
        >
          {projects.map((project, index) => (
            <motion.div
              ref={ref}
              key={index}
              variants={item}
              className="border-[0.4px] md:border hover:border-pri duration-300 border-ter rounded-[15px] md:rounded-[60px] "
            >
              <div className="w-[90%] mx-auto py-5 md:py-10 ">
                <p className="h4">{project.title}</p>
                <div className="my-5 mb-10">
                  <Image
                    alt={project.title}
                    src={project.image}
                    placeholder="blur"
                    blurDataURL="/images/profile__.png"
                    width={700}
                    height={475}
                    priority
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    className=""
                  />
                </div>
                <div className="mt-10">
                  <Link href={project.link}>
                    <Button text="View Case Study" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;