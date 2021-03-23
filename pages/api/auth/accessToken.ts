import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { createAccessToken, createRefreshToken } from '../../../utils/generateToken';

import Users from '../../../models/UserModel';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rfToken = req.cookies.refreshtoken;
    if (!rfToken) return res.status(400).json({ err: 'Please, login now!' });

    const result: any = await jwt.verify(rfToken, process.env.REFRESH_TOKEN_SECRET);
    if (!result) return res.status(400).json({ err: 'Your token is incorrect or has expired!' });

    const user: any = await Users.findById(result.id);
    if (!user) return res.status(400).json({ err: 'User does not exist.' });

    const accessToken = createAccessToken({ id: user._id });
    return res.json({
      accessToken,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
