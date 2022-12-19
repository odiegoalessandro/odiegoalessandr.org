import { extendTheme } from "@chakra-ui/react"

const colors = {}
const fonts = {
  heading: "Source Code Pro, monospace, system-ui, sans-serif",
  body: "system-ui, sans-serif",
}

export const theme = extendTheme({ colors, fonts })
