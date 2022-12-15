import { NextSeo } from "next-seo"

interface DefaultSEOProps {
  title?: string
  noindex?: boolean
  nofollow?: boolean
  description?: string
  canonical?: string
  images?: any
  titleTemplate?: string
  defaultTitle?: string
}

export default function SEO({
  title = "Homepage",
  noindex = false,
  nofollow = false,
  description = "Bem vindo ao meu blog",
  canonical = "https://odiegoalessandr.com",
  images = {},
  titleTemplate = "odiegoalessandr - %s",
  defaultTitle = "Page",
}: DefaultSEOProps) {
  return (
    <NextSeo
      title={title}
      titleTemplate={titleTemplate}
      description={description}
      defaultTitle={defaultTitle}
      nofollow={nofollow}
      noindex={noindex}
      canonical={canonical}
      twitter={{
        cardType: "summary-large-image",
        site: "@odiegoalessandr",
        handle: "@odiegoalesandr",
      }}
      openGraph={{
        url: canonical,
        title: title,
        description: description,
        images: images,
      }}
    />
  )
}
