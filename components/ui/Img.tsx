import Image, {ImageProps} from 'next/image'
import {getPlaiceholder} from 'plaiceholder'
import fs from "node:fs/promises";
import path from 'path'

export default async function Img(props: ImageProps) {
  let base64Str : string = ""
  try {
    // Chuyển đổi đường dẫn tương đối thành đường dẫn tuyệt đối
    const publicDir = path.join(process.cwd(), 'public')
    // Lấy đường dẫn tương đối từ props.src (bỏ dấu / đầu tiên nếu có)
    const imagePath = (props.src as string).replace(/^\//, '')
    // Kết hợp thành đường dẫn đầy đủ
    const fullPath = path.join(publicDir, imagePath)

    const file = await fs.readFile(fullPath);
    const { base64 } = await getPlaiceholder(file);
    base64Str = base64
  } catch (err) {
    console.error('Error loading image:', err)
  }
  return (
    <Image
      loading="lazy"
      placeholder="blur"
      blurDataURL={base64Str}
      {...props}
    />
  )
}