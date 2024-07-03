import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { bigImg, setImg1, setImg2, setImg3 } from "../../../assets/Images";
import { ImageScrollProps, ImageScrollsProps } from "../../../types";

const ImageScroll: React.FC<ImageScrollProps> = ({
  children,
  direction,
  className = "",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [1000, 0, direction]
  );

  return (
    <div ref={scrollRef} className={className}>
      <motion.div
        className="h-max"
        style={{
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const cards = [
  { img: bigImg, alt: "main image for scroll" },
  { img: setImg1, alt: "main image for scroll" },
  { img: setImg2, alt: "main image for scroll" },
  { img: setImg3, alt: "main image for scroll" },
];

export const ImageScrolls: React.FC<ImageScrollsProps> = ({
  className = "",
}) => {
  return (
    <ImageScroll direction={-1000} className={className}>
      <div className="flex gap-4" style={{ right: 0 }}>
        {cards.map((card, index) => {
          return (
            <img
              src={card.img}
              alt={card.alt}
              key={index}
              title={card.alt}
              className="max-h-[34rem] rounded-4xl w-auto"
            />
          );
        })}
      </div>
    </ImageScroll>
  );
};
