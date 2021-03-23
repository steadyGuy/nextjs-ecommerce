import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

import Users from '../../../models/UserModel';
import valid from '../../../utils/valid';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;

    default:
      break;
  }
};

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // получаем данные от POST-запроса пользователя со следующими полями:
    const { name, surname, email, password, cf_password: cfPassword } = req.body;
    const fullName = ''.concat(name, ' ', surname);

    // делаем валидацию данных функцией valid:
    const errMsg = valid(name, surname, email, password, cfPassword);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const user = await Users.findOne({ email });
    if (user) return res.status(400).json({ err: 'This email already in exists.' });

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = new Users({ name: fullName, email, password: passwordHash });

    await newUser.save();
    return res.json({ msg: 'Register Success!' });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
