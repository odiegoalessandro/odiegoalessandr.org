import { Flex, Text } from "@chakra-ui/react"
import TextBlur from "./TextBlur"
import WriteEffect from "./WriteEffect"

interface HeaderProps {
  title: String
  description: String
}

const headingVariants = {
  initial: {},
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <Flex
      minH="full"
      minW="full"
      flexDir="column"
      align="center"
      justify="center"
    >
      <WriteEffect text={title} />
      <TextBlur text={description} />
    </Flex>
  )
}
