import dbConnect from '../../../lib/mongoose'
import User from '../../../models/User'
import crypto from 'crypto'

export default async function handler(req, res) {
  await dbConnect()
  const { address } = req.query
  if (!address) return res.status(400).json({ error: 'address required' })
  const normalized = address.toLowerCase()
  let user = await User.findOne({ address: normalized })
  if (!user) {
    user = await User.create({ address: normalized, nonce: crypto.randomBytes(16).toString('hex') })
  } else {
    user.nonce = crypto.randomBytes(16).toString('hex')
    await user.save()
  }
  res.json({ nonce: user.nonce })
}
