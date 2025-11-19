import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) throw new Error('Please add JWT_SECRET to .env')

export function signToken(payload, opts = {}) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d', ...opts })
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET)
}
