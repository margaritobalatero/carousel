import { verifyToken } from '../../../utils/jwt'

export default function handler(req, res) {
  try {
    const token = req.cookies?.token
    if (!token) return res.status(401).end()
    const data = verifyToken(token)
    res.json({ address: data.address })
  } catch (e) {
    res.status(401).end()
  }
}
