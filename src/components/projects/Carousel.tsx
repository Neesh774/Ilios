import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Project from "./Project";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Icon from "../Icon";

const MotionProject = motion(Project);

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 200 : -200,
      rotateZ: direction > 0 ? 3 : -3,
      rotateY: direction > 0 ? 60 : -60,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    rotateZ: 0,
    x: 0,
    rotateY: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      rotateZ: direction > 0 ? 3 : -3,
      x: direction < 0 ? 200 : -200,
      rotateY: direction < 0 ? 60 : -60,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel = ({ projects }: { projects: PageObjectResponse[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, projects.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="w-full max-w-96 relative flex flex-col justify-center h-[28rem] lg:h-80">
      <AnimatePresence initial={false} custom={direction}>
        <MotionProject
          key={page}
          project={projects[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="flex flex-row gap-1 justify-center items-center mt-8 absolute bottom-0 left-0 right-0">
        <Icon className="m-0 cursor-pointer">
          <FiChevronLeft onClick={() => paginate(-1)} />
        </Icon>
        <div className="hidden lg:flex flex-row gap-1">
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => {
                setPage([i, i > page ? 1 : -1]);
              }}
              className="p-2"
            >
              <div
                className={`w-2 h-2 rounded-full bg-background-700 ${
                  i == imageIndex ? "bg-highlight w-[0.6rem] h-[0.6rem]" : ""
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex lg:hidden">
          <p className="text-highlight">{imageIndex + 1}</p>
        </div>
        <Icon className="m-0 cursor-pointer">
          <FiChevronRight onClick={() => paginate(1)} />
        </Icon>
      </div>
    </div>
  );
};

export default Carousel;
