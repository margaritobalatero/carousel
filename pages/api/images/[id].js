import dbConnect from '../../../lib/mongoose'
import Image from '../../../models/Image'
import { verifyToken } from '../../../utils/jwt'

export default async function handler(req, res) {
  await dbConnect()
  const { id } = req.query
  if (req.method === 'DELETE') {
    try {
      const token = req.cookies?.token
      const user = verifyToken(token)
      const img = await Image.findById(id)
      if (!img) return res.status(404).end()
      if (img.owner !== user.address) return res.status(403).end()
      await img.remove()
      return res.json({ ok: true })
    } catch (err) { console.error(err); return res.status(401).end() }
  }

  if (req.method === 'PUT') {
    try {
      const token = req.cookies?.token
      const user = verifyToken(token)
      const img = await Image.findById(id)
      if (!img) return res.status(404).end()
      if (img.owner !== user.address) return res.status(403).end()
      const { url, title } = req.body
      if (url) img.url = url
      if (title) img.title = title
      await img.save()
      return res.json(img)
    } catch (err) { console.error(err); return res.status(401).end() }
  }

  res.status(405).end()
}
