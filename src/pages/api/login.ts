// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import generateToken from '@/util/generateToken';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  // generate token
  const token = generateToken({ email, password });

  res.setHeader('Set-Cookie', `next_auth_token=${token};Max-Age=3600;HttpOnly;Path=/`);
  res.status(200).json({ token: token })
}
