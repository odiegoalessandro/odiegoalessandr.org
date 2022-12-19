import {
  ChakraProvider,
  ColorModeScript,
  Container,
  CSSReset,
} from "@chakra-ui/react"
import { theme } from "../theme/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container minW="container.md" maxW="container.lg">
        <CSSReset />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
