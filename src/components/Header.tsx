import { Flex, Heading, Text } from "@chakra-ui/react"

interface HeaderProps {
  title: String
  description: String
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <Flex minH="full" flexDir="column">
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </Flex>
  )
}
