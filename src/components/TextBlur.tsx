import { Box, BoxProps, Text, TextProps } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionDiv = motion<BoxProps>(Box)
const MotionText = motion<TextProps>(Text)

const boxVariants = {
  visible: {
    filter: ["blur(5px)", "blur(0px)"],
    opacity: [0, 1],
    x: [-50, 50, 0],
    transition: {
      delay: 2,
      duration: 1,
    },
  },
}

export default function TextBlur({ text }) {
  return (
    <MotionDiv variants={boxVariants} initial="hidden" animate="visible">
      <MotionText fontSize="2xl" mt={10} color="gray.400" fontWeight="400">
        {text}
      </MotionText>
    </MotionDiv>
  )
}
