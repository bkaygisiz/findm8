import { NextApiRequest, NextApiResponse } from "next"
import bcrypt from 'bcryptjs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        {
            const pwd = req.body.password;
            console.log(pwd);
            res.json({ password: pwd });
            bcrypt.compare('8aecb9ec11', pwd, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else
                    console.log(result);
            })
        }
    }
}