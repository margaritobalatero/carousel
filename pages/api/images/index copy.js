import dbConnect from '../../../lib/mongoose'
import Image from '../../../models/Image'
import { verifyToken } from '../../../utils/jwt'

export default async function handler(req, res) {
  await dbConnect()
  if (req.method === 'GET') {
    const imgs = await Image.find({}).sort({ createdAt: -1 })
    return res.json(imgs)
  }

  if (req.method === 'POST') {
    try {
      const token = req.cookies?.token
      if (!token) return res.status(401).json({ error: 'unauth' })
      const user = verifyToken(token)
      const { url, title } = req.body
      if (!url) return res.status(400).json({ error: 'url required' })
      const img = await Image.create({ url, title, owner: user.address })
      return res.status(201).json(img)
    } catch (err) { console.error(err); return res.status(401).json({ error: 'unauth' }) }
  }

  res.status(405).end()
}
