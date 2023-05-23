import { NextApiRequest, NextApiResponse } from "next"
import { User } from "@/types/types";
import * as UserModel from "@/model/user.model";
import * as AuthModel from "@/model/auth.model";
import { Db } from "mongodb";

export const registerUser = async (req: NextApiRequest, res: NextApiResponse, db: Db) => {
    try {
        const user: User = {
            ...req.body
        }
        const response = await UserModel.findUser(user, db);
        if (response === null) {
            const response = AuthModel.registerUser(user, db);
            res.status(200).json(response);
        }
        else {
            res.status(400).json({ message: 'Email already exists' });
        }

    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}
