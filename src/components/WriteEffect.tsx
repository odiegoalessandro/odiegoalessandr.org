import { Flex, Heading, HeadingProps } from "@chakra-ui/react"
import { motion } from "framer-motion"

const setenceVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, staggerChildren: 0.1 },
  },
}

const letterVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const MotionHeading = motion<HeadingProps>(Heading)

export default function WriteEffect({ text }) {
  return (
    <Flex as={motion.div}>
      <MotionHeading
        variants={setenceVariant}
        className="load"
        initial="hidden"
        size="3xl"
        letterSpacing={5}
        pos="relative"
        transition={{ type: "keyframes" }}
        animate="visible"
      >
        {text.split("").map((char, index) => {
          return (
            <motion.span
              key={`${char}-${index}`}
              variants={letterVariant}
              transition={{ type: "keyframes" }}
            >
              {char}
            </motion.span>
          )
        })}
      </MotionHeading>
    </Flex>
  )
}
