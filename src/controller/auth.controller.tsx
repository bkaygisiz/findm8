import { NextApiRequest, NextApiResponse } from "next"
import { LogingUser, User } from "@/types/types";
import * as UserModel from "@/model/user.model";
import * as AuthModel from "@/model/auth.model";
import { Db } from "mongodb";

export const registerUser = async (req: NextApiRequest, res: NextApiResponse, db: Db) => {
    try {
        const user: User = {
            ...req.body
        }
        const response: User | null = await UserModel.findUser(user, db);
        if (response === null) {
            AuthModel.registerUser(user, db)
            res.status(200);
        }
        else {
            res.status(400).json({ message: 'Email already exists' });
        }

    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}

export const loginUser = async (req: NextApiRequest, res: NextApiResponse, db: Db) => {
    try {
        const user: User = {
            ...req.body
        }
        AuthModel.loginUser(user, db)

    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}