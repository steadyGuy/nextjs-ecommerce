import { NextApiRequest, NextApiResponse } from 'next';
import { createAccessToken, createRefreshToken } from '../../../utils/generateToken';
import bcrypt from 'bcrypt';

import Users from '../../../models/UserModel';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      await login(req, res);
      break;

    default:
      break;
  }
};

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;

    const user: any = await Users.findOne({ email });
    if (!user) return res.status(400).json({ err: 'The user does not exists.' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ err: 'Incorrect password.' });

    const accessToken = createAccessToken({ id: user._id });
    const refreshToken = createRefreshToken({ id: user._id });
    res.json({
      msg: 'Login Success!',
      accessToken,
      refreshToken,
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
