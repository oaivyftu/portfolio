"use client"
import Image, {ImageProps} from 'next/image'
import {useEffect, useState} from 'react'

const lightBlurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
const darkBlurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="

export default function Img({alt = "", ...props}: ImageProps) {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
  }, [])

  const blurDataURL = theme === "light" ? lightBlurDataURL : darkBlurDataURL
  return (
    <Image
      alt={alt}
      loading="lazy"
      placeholder="blur"
      blurDataURL={blurDataURL}
      {...props}
    />
  )
}
