"use client"
import Image, {ImageProps} from 'next/image'

export default function Img(props: ImageProps) {
  const theme = localStorage.getItem('theme')
  const blurDataURL = theme === "light" ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
  return (
    <Image
      loading="lazy"
      placeholder="blur"
      blurDataURL={blurDataURL}
      {...props}
    />
  )
}