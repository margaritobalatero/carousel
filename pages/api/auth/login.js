import dbConnect from '../../../lib/mongoose'
import User from '../../../models/User'
import { signToken } from '../../../utils/jwt'
import { ethers } from 'ethers'
import crypto from 'crypto'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { address, signature } = req.body
  if (!address || !signature) return res.status(400).json({ error: 'missing' })

  await dbConnect()
  const user = await User.findOne({ address: address.toLowerCase() })
  if (!user) return res.status(400).json({ error: 'no user' })

  const message = `Sign this message to login. Nonce: ${user.nonce}`
  try {
    const recovered = ethers.verifyMessage(message, signature)
    if (recovered.toLowerCase() !== address.toLowerCase()) return res.status(401).json({ error: 'invalid sig' })

    user.nonce = crypto.randomBytes(16).toString('hex')
    await user.save()

    const token = signToken({ address: address.toLowerCase() })
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${7*24*3600}`)
    return res.json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: 'verification failed' })
  }
}
