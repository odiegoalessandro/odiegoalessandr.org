import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"
import Header from "./Header"

interface LayoutProps {
  children?: ReactNode
  title: string
  description: String
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <Flex h="100vh">
      <Header title={title} description={description} />
      {children}
    </Flex>
  )
}
