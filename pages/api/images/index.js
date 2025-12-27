import dbConnect from '../../../lib/mongoose'
import Image from '../../../models/Image'
import { verifyToken } from '../../../utils/jwt'

// ✅ Allow only image extensions
function isImageUrl(url) {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(url)
}

export default async function handler(req, res) {
  await dbConnect()

  // GET images (unchanged)
  if (req.method === 'GET') {
    const imgs = await Image.find({}).sort({ createdAt: -1 })
    return res.json(imgs)
  }

  // POST image (protected)
  if (req.method === 'POST') {
    try {
      const token = req.cookies?.token
      if (!token) {
        return res.status(401).json({ error: 'unauth' })
      }

      const user = verifyToken(token)
      const { url, title } = req.body

      if (!url) {
        return res.status(400).json({ error: 'url required' })
      }

      // 🚫 BLOCK non-images (videos, blobs, downloads, etc.)
      if (!isImageUrl(url)) {
        return res.status(400).json({
          error: 'Only image URLs are allowed (jpg, png, gif, webp)'
        })
      }

      // ✅ SAFE TO SAVE
      const img = await Image.create({
        url,
        title,
        owner: user.address
      })

      return res.status(201).json(img)
    } catch (err) {
      console.error(err)
      return res.status(401).json({ error: 'unauth' })
    }
  }

  res.status(405).end()
}
