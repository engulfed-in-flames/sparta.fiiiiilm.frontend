import React, { useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import {
  Box,
  ButtonGroup,
  IconButton,
  Skeleton,
  Text,
  chakra,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const sliderVars: Variants = {
  invisible: (isRightBtn: boolean) => ({
    x: isRightBtn ? -window.innerWidth + 8 : window.innerWidth - 8,
  }),
  appear: { x: 0 },
  disappear: (isRightBtn: boolean) => ({
    x: isRightBtn ? window.innerWidth - 8 : -window.innerWidth + 8,
  }),
};

const OuterSlider = chakra(motion.div, {});

const InnerSlider = chakra(motion.div, {});

const SliderCard = chakra(motion.div, {});

export default function Slider() {
  const PAGE_OFFSET = 3;
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [isLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sliderAnimationExit, setSliderAnimationExit] = useState(true);
  const [isRightBtn, setIsRightBtn] = useState(true);
  const toggleSliderAnimationExit = () => {
    setSliderAnimationExit((prev) => !prev);
  };

  const moveSliderLeft = () => {
    if (!sliderAnimationExit) return;
    console.log("Clicked!");
    setIsRightBtn(true);
    setSliderAnimationExit(false);
    const pageLength = Math.floor((arr.length - 1) / PAGE_OFFSET);
    setPage((_page) => (_page > 0 && _page < pageLength ? _page + 1 : 1));
  };
  const moveSliderRight = () => {
    if (!sliderAnimationExit) return;
    console.log("Clicked!");
    setIsRightBtn(false);
    setSliderAnimationExit(false);
    const pageLength = Math.floor((arr.length - 1) / PAGE_OFFSET);
    setPage((_page) =>
      _page > 1 && _page <= pageLength ? _page - 1 : pageLength
    );
  };

  return (
    <OuterSlider position={"relative"} minW={"660px"} aspectRatio={"2/0.85"}>
      <Box
        h={"full"}
        display={"grid"}
        alignItems={"center"}
        gridTemplateColumns={"2.5fr 95fr 2.5fr"}
      >
        <IconButton
          icon={<FaArrowLeft />}
          aria-label="Slider Left Arrow Button"
          onClick={moveSliderLeft}
          zIndex={1}
          bg={"rgba('0,0,0,0')"}
          borderRadius={"99%"}
        />
        <Box></Box>
        <IconButton
          icon={<FaArrowRight />}
          aria-label="Slider Right Arrow Button"
          onClick={moveSliderRight}
          zIndex={1}
          bg={"rgba('0,0,0,0')"}
          borderRadius={"99%"}
        />
      </Box>
      <AnimatePresence
        initial={false}
        onExitComplete={toggleSliderAnimationExit}
        custom={isRightBtn}
      >
        <InnerSlider
          key={page}
          zIndex={1}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          w={"95%"}
          display={"grid"}
          gridTemplateColumns={"repeat(3, 1fr)"}
          columnGap={8}
          mx={"auto"}
          custom={isRightBtn}
          variants={sliderVars}
          initial="invisible"
          animate="appear"
          exit="disappear"
          transition="0.1s linear"
        >
          {arr
            .slice(PAGE_OFFSET * (page - 1), PAGE_OFFSET * page)
            .map((_, index) =>
              isLoading ? (
                <Skeleton
                  key={index}
                  cursor={"pointer"}
                  position="relative"
                  aspectRatio={"calc(3/4)"}
                  minH={60}
                  bg={"gray.400"}
                  borderRadius={"md"}
                >
                  <Box
                    zIndex={99}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                  >
                    <Text fontSize={32}>1</Text>
                  </Box>
                </Skeleton>
              ) : (
                <SliderCard
                  key={index}
                  cursor={"pointer"}
                  position="relative"
                  w={240}
                  h={320}
                  bg={"gray.400"}
                  borderRadius={"md"}
                >
                  <Box>
                    <Text>1</Text>
                  </Box>
                </SliderCard>
              )
            )}
        </InnerSlider>
      </AnimatePresence>
    </OuterSlider>
  );
}
