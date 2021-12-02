import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '../models/user.js';

const secret = 'test'; //process.env.SECRETO;

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: 'User Not Found' });

        const pwIsCorrect = await bcrypt.compare(password, existingUser.password);
        if (!pwIsCorrect) return res.status(400).json({ message: 'Invalid Credentials' });

        const token = jwt.sign({ email: existingUser.email, password: existingUser.password }, secret, { expiresIn: '1hr' });
        res.status(200).json({ result: existingUser, token });

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

export const register = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) return res.status(400).json({ message: 'User Already Exists' });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: '1hr' });

        res.status(201).json({ result, token });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};